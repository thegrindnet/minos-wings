import "./Hero.css";
import FoodPhoto from "../FoodPhoto/FoodPhoto.jsx";
import { business } from "../../utils/constants.js";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Wings. Shrimp. Your next craving.</p>
          <h1>
            Big flavor.
            <br />
            <span>Every bite.</span>
          </h1>
          <p className="hero__description">
            Saucy wings. Flavor-packed shrimp. Homemade fries and ranch. Your
            neighborhood favorites, made for sharing.
          </p>
          <div className="hero__actions">
            <a className="button" href="#menu">
              View Menu <span aria-hidden="true">↓</span>
            </a>
            <a className="button button--outline" href={business.phoneHref}>
              Call to Order <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero__location">
            <span aria-hidden="true">●</span> Big cravings welcome in{" "}
            {business.serviceArea}
          </p>
        </div>
        <div className="hero__visual">
          <div className="hero__stamp">
            <strong>5</strong>
            <span>
              BOLD
              <br />
              FLAVORS
            </span>
          </div>
          <FoodPhoto />
          <div className="hero__caption">
            <span>SAUCY. SAVORY. SERIOUSLY GOOD.</span>
            <a href="#combos">Meet the combos ↗</a>
          </div>
        </div>
      </div>
      <div className="hero__bottom container">
        <span>Traditional wings</span>
        <span aria-hidden="true">✦</span>
        <span>Flavorful shrimp</span>
        <span aria-hidden="true">✦</span>
        <span>Homemade favorites</span>
      </div>
    </section>
  );
}
