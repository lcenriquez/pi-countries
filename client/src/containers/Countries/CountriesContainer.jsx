import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import Countries from '../../components/Countries/Countries';
import PaginationSelector from '../../components/PaginationSelector/PaginationSelector';
import { getCountries,addFilter, clearFilters, getActivities } from '../../redux/actions';
import { filter } from '../../adapters/filter';
import { paginate } from '../../adapters/paginate';

export default function CountriesContainer() {
  const dispatch = useDispatch();
  const [ countries, setCountries ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const reduxCountries = useSelector(state => state.countries);
  const reduxContinents = useSelector(state => state.continents);
  const reduxFilters = useSelector(state => state.filters);
  const reduxActivities = useSelector(state => state.activities);
  const reduxLoading = useSelector(state => state.loading);

  useEffect(() => { // On first load only
    // Fetch countries from API for the first time only
    dispatch(getCountries());
    // Fetch activities from API (will be called later)
    dispatch(getActivities());
  },[]);

  useEffect(() => {
    // Filtering
    if (Object.keys(reduxFilters).length > 0) {
      // Apply filters if at least one exists
      setCountries(paginate(filter(reduxCountries, reduxFilters)))
      setCurrentPage(1);
    } else {
      // Reset state if filters are cleared
      if (reduxCountries.length > 0) setCountries(paginate(reduxCountries));
    }
  }, [reduxCountries, reduxFilters])

  if(countries.length === 0) {
    // No results found / loading conditional render
    return (
      <div className="container">
        <Filters reduxFilters={reduxFilters} reduxActivities={reduxActivities} reduxContinents={reduxContinents} addFilter={(filter, value) => dispatch(addFilter(filter, value))} clearFilters={() => dispatch(clearFilters())} />
        <p>{reduxLoading === true ? 'Loading...' : 'No results found'}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Filters reduxFilters={reduxFilters} reduxActivities={reduxActivities} reduxContinents={reduxContinents} addFilter={(filter, value) => dispatch(addFilter(filter, value))} clearFilters={() => dispatch(clearFilters())} />
      <PaginationSelector array={countries[currentPage-1] || []} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={countries.length} />
      <Countries countries={countries[currentPage-1] || []} currentPage={currentPage} totalPages={countries.length} />
    </div>
  );
}