import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filters from '../../components/Filters/Filters';
import Countries from '../../components/Countries/Countries';
import { getAllCountries } from '../../adapters/api/countries';
import { addCountries, addFilter, clearFilters } from '../../redux/actions';
import { filter } from '../../adapters/filter';

export default function Home() {
  const [ countries, setCountries ] = useState([]);
  const dispatch = useDispatch();
  const reduxCountries = useSelector(state => state.countries);
  const reduxContinents = useSelector(state => state.continents);
  const reduxFilters = useSelector(state => state.filters);

  useEffect(() => {
    // Set initial state
    if (reduxCountries.length === 0) {
      // Fetch countries from API for the first time only
      getAllCountries().then(countries => dispatch(addCountries(countries)));
    }
    // Match local state to redux state if no filters are applied
    if (Object.keys(reduxFilters).length === 0) setCountries(reduxCountries);
  },[reduxCountries]);

  useEffect(() => {
    // Filtering
    if (Object.keys(reduxFilters).length > 0) {
      // Apply filters if at least one exists
      setCountries(filter(reduxCountries, reduxFilters))
    } else {
      // Reset state if filters are cleared
      setCountries(reduxCountries);
    }
  }, [reduxFilters])

  return (
    <div>
      <Filters reduxFilters={reduxFilters} reduxContinents={reduxContinents} addFilter={(filter, value) => dispatch(addFilter(filter, value))} clearFilters={() => dispatch(clearFilters())} />
      <Countries countries={countries} />
    </div>
  );
}