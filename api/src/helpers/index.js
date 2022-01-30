const { Country } = require('../db');

const createBulkCountries = (countries) => {
  // Expected argument: countries object from the API's json reponse
  let promiseArray = [];
  // Iterate through array to create custom object that matches our model
  countries.forEach(country => {
    let obj = {
      id: country.cca3,
      name: country.name.common,
      flag: country.flags[0],
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : "N/A",
      subregion: country.subregion ? country.subregion : "N/A",
      area: Math.floor(country.area),
      population: Math.floor(country.population)
    }
    // Push each promise to out promiseArray
    promiseArray.push(Country.create(obj));
  });
  return Promise.all(promiseArray);
}

module.exports = {
  createBulkCountries
}