const initialState = {
  countries: [],
  filters: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_COUNTRIES":
      return {
        ...state,
        countries: action.countries
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
    default:
      return state;
  }
}