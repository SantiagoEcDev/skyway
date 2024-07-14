import { Logo } from "../Logo/Logo";
import { SubheadingH2 } from "../Titles/Titles";
import { FooterNav } from "./FooterNav/Footer";

import "./Footer.css";

const sections = [
  {
    title: "Nosotros",
    items: [
      { href: "#", text: "Guía reserva" },
      { href: "#", text: "Centro de ayuda" },
      { href: "#", text: "Contáctanos" },
      { href: "#", text: "Sobre nosotros" },
    ],
  },
  {
    title: "Productos",
    items: [
      { href: "#", text: "Vuelos" },
      { href: "#", text: "Hoteles" },
      { href: "#", text: "Trenes" },
      { href: "#", text: "Bus" },
      
    ],
  },
  {
    title: "Otros",
    items: [
      { href: "#", text: "Blog" },
      { href: "#", text: "Políticas" },
    ],
  },
];
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-message">
        <Logo />
        <h2>Encuentra los mejores destinos y ofertas de vuelos con nosotros. Viaja fácil y seguro con SkyWay. ¡Explora el mundo y vuela alto!</h2>
      </div>
      <div className="footer-links">
        {sections.map((section, index) => (
            <FooterNav key={index} title={section.title} navItems={section.items}/>
        ))}
      </div>
    </footer>
  );
};
