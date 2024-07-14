import { SubheadingH2, SubheadingH3 } from "../Titles/Titles";
import "./OurServices.css";
import { InfoCards } from "../InfoCards/InfoCards";
import LuggageIcon from "./icons/LuggageIcon.png";
import BookingIcon from "./icons/BookingIcon.png";
import PaymentIcon from "./icons/PaymentIcon.png";

export const OurServices = () => {
  return (
    <>
      <section className="services-section">
        <SubheadingH3 text="SERVICIOS" />
        <SubheadingH2 text="Nuestros servicios" />

        <div className="services-section-infocards">
          
            <InfoCards icon={LuggageIcon} title="Todas tus necesidades" description="Desde vuelos, estadías, dale un vistazo a nuestros servicios"/>
            <InfoCards icon={BookingIcon} title="Reserva flexible" description="Cancelación gratuita hasta 12 días antes de tu vuelo."/>
            <InfoCards icon={PaymentIcon} title="Pago seguro" description="Tenemos un método de compra segura y queremos que tengas una experiencia positiva y memorable."/>
        </div>
      </section>
    </>
  );
};
