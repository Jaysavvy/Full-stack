import React from "react";

let Search = (searchCountry, substring) => {
  let filteredCountries = searchCountry.filter(
    (country) => country.name.includes(substring) === true
  );
  return filteredCountries;
};
export default Search;
