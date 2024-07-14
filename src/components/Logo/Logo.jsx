import SkyWayLogo from "../../assets/sky-way-logo.png";
import "./Logo.css";

export const Logo = () => {
  return (
    <a href="/" className="header-logo">
        <img src={SkyWayLogo} alt="SkyWayLogo" />
        <p>SkyWay</p>
      </a>
  )
}
