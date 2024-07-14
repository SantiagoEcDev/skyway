import "./CallToButton.css";

export const CallToButton = ({id, href, icon, text}) => {
  return (
    <div id={id} className="navigation-cta">
      <a href={href}>
        <img src={icon} alt="Booking" /> {text}
      </a>
    </div>
  );
};
