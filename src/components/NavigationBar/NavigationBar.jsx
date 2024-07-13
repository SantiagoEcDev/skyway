import "./NavigationBar.css";
import Logo from "../../assets/sky-way-logo.png";
import BookingIcon from "../../assets/BookingIcon.png";
import { CallToButton } from "../CallToButton/CallToButton";

export const NavigationBar = ({navList }) => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="SkyWayLogo" />
        <p>SkyWay</p>
      </div>

      <nav>
        <ul className="header-navigation">
          <li className="active">Inicio</li>
          <li>
            <a href="#">{(navList = "Destinos")}</a>
          </li>
          <li>
            <a href="#">{(navList = "Servicios")}</a>
          </li>
          <li>
            <a href="#">{(navList = "Contacto")}</a>
          </li>
        </ul>
      </nav>

      <CallToButton icon={BookingIcon} text={"Reservas"}/>
    </header>
  );
};
