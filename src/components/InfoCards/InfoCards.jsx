import "./InfoCards.css";

export const InfoCards = ({ icon, title, description }) => {
  return (
    <article className="info-card">
      <img className="info-card-icon" src={icon} alt="" />
      <h4 className="info-card-title">{title}</h4>
      <p className="info-card-description">{description}</p>
      
    </article>
  );
};
