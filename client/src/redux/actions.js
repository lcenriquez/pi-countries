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

function getActivities() {
  return function(dispatch) {
    return fetch(`${process.env.REACT_APP_API_URL}/activities`)
    .then(response => response.json())
    .then(json => {
      dispatch({type: "ADD_ACTIVITIES", activities: json})
    })
    .catch(e => console.log(e));
  }
}

module.exports = {
  addCountries,
  addFilter,
  clearFilters,
  getActivities
}