import "./Header.css";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { business } from "../../utils/constants.js";
export default function Header() {
  return (
    <>
      <div className="header__announcement">
        BIG FLAVOR. HOMEMADE TOUCHES.{" "}
        <span>Serving {business.serviceArea}</span>
      </div>
      <header className="header">
        <div className="container header__inner">
          <a href="#home" aria-label="Minos Wings home">
            <Logo />
          </a>
          <Navigation />
        </div>
      </header>
    </>
  );
}
