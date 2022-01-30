function getAllCountries() {
  return fetch(`${process.env.REACT_APP_API_URL}/countries`)
  .then(response => response.json())
  .then(json => json)
  .catch(error => console.log(error));
}

module.exports = {
  getAllCountries
}