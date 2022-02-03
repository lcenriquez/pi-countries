import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import Countries from '../../components/Countries/Countries';
import PaginationSelector from '../../components/PaginationSelector/PaginationSelector';
import { getAllCountries } from '../../adapters/api/countries';
import { addCountries, addFilter, clearFilters, getActivities } from '../../redux/actions';
import { filter } from '../../adapters/filter';
import { paginate } from '../../adapters/paginate';

export default function Home() {
  const [ countries, setCountries ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const dispatch = useDispatch();
  const reduxCountries = useSelector(state => state.countries);
  const reduxContinents = useSelector(state => state.continents);
  const reduxFilters = useSelector(state => state.filters);
  const reduxActivities = useSelector(state => state.activities);

  useEffect(() => {
    // Set initial state
    if (reduxCountries.length === 0) {
      // Fetch countries from API for the first time only
      getAllCountries().then(countries => dispatch(addCountries(countries)));
      // Fetch activities from API (will be called later)
      dispatch(getActivities());
    }
    // Match local state to redux state if no filters are applied
    if (Object.keys(reduxFilters).length === 0) setCountries(paginate(reduxCountries));
  },[reduxCountries]);

  useEffect(() => {
    // Filtering
    if (Object.keys(reduxFilters).length > 0) {
      // Apply filters if at least one exists
      setCountries(paginate(filter(reduxCountries, reduxFilters)))
    } else {
      // Reset state if filters are cleared
      setCountries(paginate(reduxCountries));
    }
  }, [reduxFilters])

  return (
    <div>
      <Filters reduxFilters={reduxFilters} reduxActivities={reduxActivities} reduxContinents={reduxContinents} addFilter={(filter, value) => dispatch(addFilter(filter, value))} clearFilters={() => dispatch(clearFilters())} />
      <PaginationSelector array={countries[currentPage-1] || []} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={countries.length} />
      <Countries countries={countries[currentPage-1] || []} currentPage={currentPage} totalPages={countries.length} />
    </div>
  );
}