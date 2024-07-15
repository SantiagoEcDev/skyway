import "./Booking.css";
import iconLocation from "./icons/iconLocation.png";
import iconPlaneDeparture from "./icons/iconPlaneDeparture.png";
import iconPlaneArrival from "./icons/iconPlaneArrival.png";
import iconPeople from "./icons/iconPeople.png";
import iconSearch from "./icons/iconSearch.png";
import { SubheadingH2 } from "../Titles/Titles";
import { SelectCountry } from "./SelectCountry/SelectCountry";
import { useState } from "react";

export const Booking = () => {
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setMessage(true);
  };

  return (
    <section className="booking-section">
      <SubheadingH2 text="Reservar" />
      <div className="booking-section-make-booking">
        <span>
          <img src={iconLocation} alt="" />
          <SelectCountry />
        </span>
        <span>
          <img src={iconPlaneDeparture} alt="" />
          <label htmlFor="ida">Ida</label>
          <input type="date" placeholder="Ida" />
        </span>
        <span>
          <img src={iconPlaneArrival} alt="" />
          <label htmlFor="vuelta">Vuelta</label>
          <input type="date" placeholder="Vuelta" required/>
        </span>
        <span>
          <img src={iconPeople} alt="" />
          <input type="number" placeholder="Personas" required />
        </span>
        <button onClick={handleClick} className="booking-section-make-booking-search">
          <img src={iconSearch} alt="" />
          Buscar
        </button>
      </div>
      <div style={{
          display: message ? 'block' : 'none',
          color: 'red',
          marginTop: '20px',
          textAlign: 'center'
        }}>
        <p>¡Lo sentimos, ahora mismo no hay vuelos disponibles para la fecha que elegiste!</p>
      </div>
    </section>
  );
};
