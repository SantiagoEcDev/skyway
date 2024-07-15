import { useState } from "react";
import { countriesData } from "./countries";
import "./SelectCountry.css";

export const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const sortedCountries = countriesData.countries.sort((a, b) =>
    a.es_name.localeCompare(b.es_name)
  );

  return (
    <>
      <select
        className="select-country"
        id="countrySelect"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option value="">Elige un destino</option>
        {sortedCountries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.es_name}
          </option>
        ))}
      </select>
    </>
  );
};
