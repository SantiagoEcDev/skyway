import React, { useState } from "react";
import "./NavigationBar.css";
import { Logo } from "../Logo/Logo";
import BookingIcon from "../../assets/BookingIcon.png";
import { CallToButton } from "../CallToButton/CallToButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Logo />

      <nav className={menuOpen ? "open" : ""}>
        <ul className="header-navigation">
          <li className="active">Inicio</li>
          <li>
            <a href="#">Destinos</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>

      <div className={`header-navigation-bar ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="icon" />
      </div>

      <CallToButton id="bookingButton" icon={BookingIcon} text={"Reservas"} />
    </header>
  );
};
