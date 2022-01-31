function search(countries, name) {
  return countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
}

function sortAlphabetically(countries, sort) {
  console.log(sort);
  if (sort === 'A-Z') {
    return [...countries.sort((country1, country2) => (country1.name < country2.name ? -1 : 1))]
  } else if (sort === 'Z-A') {
    return [...countries.sort((country1, country2) => (country1.name < country2.name ? 1 : -1))]
  } else if (sort === 'P-H') {
    return [...countries.sort((country1, country2) => (country1.population < country2.population ? 1 : -1))]
  } else if (sort === 'P-L') {
    return [...countries.sort((country1, country2) => (country1.population < country2.population ? -1 : 1))]
  }
}

function filter(countries, filters) {
  let filteredCountries = [...countries];
  if (filters.country && filters.country !== '') {
    filteredCountries = search(filteredCountries, filters.country)
  }
  if (filters.sort && filters.sort !== '') {
    filteredCountries = sortAlphabetically(filteredCountries, filters.sort)
  }

  return filteredCountries;
}

module.exports = {
  search,
  sortAlphabetically,
  filter
}