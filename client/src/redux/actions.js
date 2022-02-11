export function addCountries(countries) {
  // Fetch called in adapters/api/countries
  return {
    type: 'ADD_COUNTRIES',
    countries
  }
}

export function getCountries() {
  return async function(dispatch) {
    dispatch({type: 'SET_LOADING', loading: true});
    try {
      let response = await fetch(`${process.env.REACT_APP_API_URL}/countries`);
      let countries = await response.json();
      return dispatch({type: 'ADD_COUNTRIES', countries})
    } catch(e) {
      console.log(e);
    }
  }
}

export function addFilter(filter, value) {
  return {
    type: 'ADD_FILTER',
    filter: {
      [filter]: value
    }
  };
}

export function clearFilters() {
  return {
    type: 'CLEAR_FILTERS'
  };
}

export function getActivities() {
  return function(dispatch) {
    return fetch(`${process.env.REACT_APP_API_URL}/activities`)
    .then(response => response.json())
    .then(json => {
      dispatch({type: "ADD_ACTIVITIES", activities: json})
    })
    .catch(e => console.log(e));
  }
}

export function setLoading(state) {
  return {
    type: 'SET_LOADING',
    loading: state
  }
}