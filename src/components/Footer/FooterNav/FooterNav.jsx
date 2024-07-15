import "./FooterNav.css";

export const FooterNav = ({ title, navItems }) => {
  return (
    <>
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          <h3>{title}</h3>
          {navItems.map((item, index) => (
            <li className="footer-nav-list-links" key={index}>
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
