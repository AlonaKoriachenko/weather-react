import React from "react";
import SearchForm from "./SearchForm";
import Weather from "./Weather";
import OpenSource from "./OpenSource";

import "./App.css";

export default function App() {
  return (
    <div className="weather-app-react">
      <div className="weather-app">
        <SearchForm />
        <Weather />
      </div>
      <OpenSource />
    </div>
  );
}
