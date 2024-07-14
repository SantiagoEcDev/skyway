import "./Hero.css";
import Japon from "./images/Japon.png";
import Grecia from "./images/Grecia.png";
import Francia from "./images/Francia.png";
import MapIcon from "./images/MapIcon.png";
import { CallToButton } from "../CallToButton/CallToButton";

export const Hero = () => {
  return (
    <section className="hero-section">
      <main className="hero-section-message">
        <h1 className="hero-section-message-title">
          La vida es corta, <br /> <span>¡el mundo es grande!</span> <br />{" "}
          <br />
          No te quedes en casa, <br />
          <span>¡sal a explorarlo!</span>
        </h1>
        <CallToButton id="discover" href="#topPlaces" icon={MapIcon} text={"Descubrir"} />
      </main>

      <img className="hero-section-image-francia" src={Francia} alt="Francia" />
      <img className="hero-section-image-japon" src={Japon} alt="Japón" />
      <img className="hero-section-image-grecia" src={Grecia} alt="Grecia" />
    </section>
  );
};
