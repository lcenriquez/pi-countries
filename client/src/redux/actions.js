function addCountries(countries) {
  return {
    type: 'ADD_COUNTRIES',
    countries
  }
}

function addFilter(filter, value) {
  return {
    type: 'ADD_FILTER',
    filter: {
      [filter]: value
    }
  };
}

function clearFilters() {
  return {
    type: 'CLEAR_FILTERS'
  };
}

module.exports = {
  addCountries,
  addFilter,
  clearFilters
}