import "./NavigationBar.css";
import { Logo } from "../Logo/Logo";
import BookingIcon from "../../assets/BookingIcon.png";
import { CallToButton } from "../CallToButton/CallToButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const NavigationBar = ({navList }) => {
  return (
    <header className="header">
      <Logo/>

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

      <CallToButton id="bookingButton" icon={BookingIcon} text={"Reservas"}/>
      <FontAwesomeIcon className="header-navigation-bar" icon={faBars} />
    </header>
  );
};
