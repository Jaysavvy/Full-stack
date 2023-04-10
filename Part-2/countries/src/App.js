import React from "react";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [country, setCountry] = useState("");

  const handleCountry = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  return (
    <div>
      <h2>Country Search</h2>
      <span>Find Countries...</span>
      <input value={country} onChange={handleCountry} />
    </div>
  );
}

export default App;
