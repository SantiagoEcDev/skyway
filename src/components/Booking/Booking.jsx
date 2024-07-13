import "./Booking.css";
import { countriesData } from "./countries";
import iconLocation from "./icons/iconLocation.png";
import iconPlaneDeparture from "./icons/iconPlaneDeparture.png";
import iconPlaneArrival from "./icons/iconPlaneArrival.png";
import iconPeople from "./icons/iconPeople.png";
import iconSearch from "./icons/iconSearch.png";
import {SubheadingH2} from "../Titles/Titles"

export const Booking = () => {
  return (
    <section className="booking-section">
      <SubheadingH2 text="Reservar"/>
      <div className="booking-section-make-booking">
        <span>
          <img src={iconLocation} alt="" />
          <input type="text" placeholder="Destino" />
        </span>
        <span>
          <img src={iconPlaneDeparture} alt="" />
          <input type="text" placeholder="Ida" />
        </span>
        <span>
          <img src={iconPlaneArrival} alt="" />
          <input type="text" placeholder="Vuelta" />
        </span>
        <span>
          <img src={iconPeople} alt="" />
          <input type="text" placeholder="Personas" />
        </span>
        <button className="booking-section-make-booking-search">
          <img src={iconSearch} alt="" />
          Buscar
        </button>
      </div>
    </section>
  );
};
