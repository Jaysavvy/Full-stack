import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";

import "./App.css";

function App() {
  const [country, setCountry] = useState("");
  const [searchCountry, setSearchCountry] = useState([]);

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setSearchCountry(response.data);
    });
  }, []);

  const filteredCountries =
    setCountry === "" ? [] : Search(searchCountry, country);

  return (
    <div>
      <h2>Country Search</h2>
      <span>Find Countries...</span>
      <input value={country} onChange={handleCountry} />
    </div>
  );
}

export default App;
