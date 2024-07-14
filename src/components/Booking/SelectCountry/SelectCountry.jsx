import { useState } from "react";
import { countriesData } from "./countries";
import "./SelectCountry.css";

export const SelectCountry = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <>
      <select
        className="select-country"
        id="countrySelect"
        value={selectedCountry}
        onChange={handleChange}
      >
        <option value="">Elige un destino</option>
        {countriesData.countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.es_name}
          </option>
        ))}
      </select>
    </>
  );
};
