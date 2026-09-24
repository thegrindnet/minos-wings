import "./Combos.css";
import { combos, business } from "../../utils/constants.js";
import FoodPhoto from "../FoodPhoto/FoodPhoto.jsx";
export default function Combos() {
  return (
    <section id="combos" className="combos section">
      <div className="container">
        <p className="eyebrow">The whole delicious deal</p>
        <h2>Make it a combo.</h2>
        <p className="section__intro">
          Your favorite flavor. The perfect sides. One happy appetite.
        </p>
        <div className="combos__grid">
          {combos.map((combo) => (
            <article className="combos__card" key={combo.name}>
              <div className="combos__photo">
                <FoodPhoto variant={combo.photo} />
                <span className="combos__price">${combo.price}</span>
              </div>
              <div className="combos__content">
                <p className="eyebrow">{combo.label}</p>
                <h3>{combo.name}</h3>
                <p>{combo.description}</p>
                <div className="combos__bottom">
                  <span>{combo.detail}</span>
                  <a
                    href={business.phoneHref}
                    aria-label={`Call to order the ${combo.name}`}
                  >
                    Order yours ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
