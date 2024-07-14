import "./NavigationBar.css";
import { Logo } from "../Logo/Logo";
import BookingIcon from "../../assets/BookingIcon.png";
import { CallToButton } from "../CallToButton/CallToButton";

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

      <CallToButton icon={BookingIcon} text={"Reservas"}/>
    </header>
  );
};
