import "./TopPlaces.css";
import { SubheadingH2, SubheadingH3 } from "../Titles/Titles";
import { CountriesCard } from "../CountriesCard/CountriesCard";
import IslandiaImage from "./images/Islandia.png";
import MachuImage from "./images/Machu Pichu.png";
import Melfor from "./images/Melfor.png";

export const TopPlaces = () => {
  return (
    <section className="top-places-section">
      <SubheadingH3 text="DESTINOS POPULARES" />

      <SubheadingH2
        text={
          <>
            Explora estos<span> 3 </span>destinos top
          </>
        }
      />
      <div className="top-places-section-country-cards">
        <CountriesCard
          photo={IslandiaImage}
          name="Auroras, Islandia"
          price="$500"
          stars="4.9"
        />
        <CountriesCard
          photo={MachuImage}
          name="Machu Pichu, Perú"
          price="$1000.00"
          stars="4.9"
        />
        <CountriesCard
          photo={Melfor}
          name="Melfor, Nueva Zelanda"
          price="$800.00"
          stars="4.9"
        />
      </div>
    </section>
  );
};
