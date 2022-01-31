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

module.exports = {
  addCountries,
  addFilter
}