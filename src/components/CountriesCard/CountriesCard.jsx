import "./CountriesCard.css";
import StarIcon from "./icons/Star.png";
export const CountriesCard = ({ photo, name, price, stars }) => {
  return (
    <article className="country-card">
      <div className="country-card-image">
        <img src={photo} alt="" />
      </div>
      <div className="country-card-info">
        <div className="country-card-name">
          <h4>{name}</h4>
        </div>
        <div className="country-card-price">
          <p>{price}</p>
        </div>
        <div className="country-card-stars">
          <p>
            {stars} <img src={StarIcon} alt="" />
          </p>
        </div>
      </div>
    </article>
  );
};
