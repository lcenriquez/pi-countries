const initialState = {
  activities: [],
  countries: [],
  continents: [],
  filters: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COUNTRIES":
      let continents = [];
      action.countries.forEach(country => !continents.includes(country.continent) ? continents.push(country.continent) : null);
      return {
        ...state,
        countries: action.countries,
        continents: continents
      }
    case "ADD_FILTER":
      return {
        ...state,
        filters: {...state.filters, [Object.keys(action.filter)[0]]: Object.values(action.filter)[0]}
      }
    case "CLEAR_FILTERS":
      document.querySelectorAll("input").forEach(input => input.value = "");
      document.querySelectorAll("select").forEach(select => select.value = "");
      return {
        ...state,
        filters: {}
      }
    case "ADD_ACTIVITIES":
      return {
        ...state,
        activities: action.activities
      }
    default:
      return state;
  }
}