import "./Flavors.css";
import { flavors } from "../../utils/constants.js";
export default function Flavors() {
  return (
    <section id="flavors" className="flavors section">
      <div className="container">
        <div className="flavors__heading">
          <div>
            <p className="eyebrow">Find your flavor</p>
            <h2>Pick your personality.</h2>
          </div>
          <p>
            Spicy, sweet, or savory.
            <br />
            Five ways to make it yours.
          </p>
        </div>
        <ul className="flavors__list">
          {flavors.map((flavor, i) => (
            <li key={flavor}>
              <h3>{flavor}</h3>
              <span className="flavors__spark" aria-hidden="true">
                ✦
              </span>
            </li>
          ))}
        </ul>
        <p className="flavors__note">
          All five flavors available for wings & shrimp.
        </p>
      </div>
    </section>
  );
}
