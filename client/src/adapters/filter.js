function search(countries, name) {
  return countries.filter(country => country.name.toLowerCase().includes(name.toLowerCase()));
}

function sortAlphabetically(countries, sort) {
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

function filterByContinent(countries, continent) {
  return countries.filter(country => country.continent === continent);
}

function filterByActivities(countries, activities) {
  return countries.filter(country => hasActivity(country, activities[0]) === true);
}

function hasActivity(country, activityId) {
  let index = country.activities.findIndex(a => {
    // console.log("Country.activity.id:", a.id);
    // console.log("Activity id (filter):", activityId);
    return a.id === +activityId
  });
  if (index > -1) return true;
  return false;
}

function filter(countries, filters) {
  let filteredCountries = [...countries];
  if (filters.country && filters.country !== '') {
    filteredCountries = search(filteredCountries, filters.country);
  }
  if (filters.sort && filters.sort !== '') {
    filteredCountries = sortAlphabetically(filteredCountries, filters.sort);
  }
  if (filters.continent && filters.continent !== '') {
    filteredCountries = filterByContinent(filteredCountries, filters.continent);
  }
  // Written in plural because multiple activity search is intended in the future
  if (filters.activities && filters.activities !== '') {
    console.log("FILTER ACTIVITIES");
    filteredCountries = filterByActivities(filteredCountries, filters.activities);
  }

  return filteredCountries;
}

module.exports = {
  filter,
  search
}