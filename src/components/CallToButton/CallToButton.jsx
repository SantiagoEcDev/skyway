import "./CallToButton.css";

export const CallToButton = ({icon, text}) => {
  return (
    <div className="navigation-cta">
      <a href="#">
        <img src={icon} alt="Booking" /> {text}
      </a>
    </div>
  );
};
