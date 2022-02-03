export function getAllCountries() {
  return fetch(`${process.env.REACT_APP_API_URL}/countries`)
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.error(error));
}

export function getCountry(id) {
  return fetch(`${process.env.REACT_APP_API_URL}/countries/${id}`)
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.error(error));
}