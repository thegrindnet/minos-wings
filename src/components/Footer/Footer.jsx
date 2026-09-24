import "./Footer.css";
import Logo from "../Logo/Logo.jsx";
import { business, navigationLinks } from "../../utils/constants.js";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Logo />
            <p>
              Big flavor. Every bite.
              <br />
              <span>Wings & shrimp in Chaparral, NM.</span>
            </p>
          </div>
          <div className="footer__links">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="container footer__bottom">
          <span>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <a className="footer__mobile-call" href={business.phoneHref}>
        Call to Order <span>{business.phone} ↗</span>
      </a>
    </>
  );
}
