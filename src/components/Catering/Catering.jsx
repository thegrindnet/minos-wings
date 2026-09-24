import "./Catering.css";
import { business } from "../../utils/constants.js";
export default function Catering() {
  return (
    <section className="catering section" id="catering">
      <div className="container catering__inner">
        <div className="catering__headline">
          <p className="eyebrow">Good food brings people together</p>
          <h2>
            Your people.
            <br />
            Our bold flavor.
          </h2>
        </div>
        <div className="catering__copy">
          <p>
            Game day, family celebrations, or just because. Bring Mino’s to your
            next event and give everyone something to get excited about.
          </p>
          <p>Call us to talk catering options, pricing, and availability.</p>
          <a className="button button--light" href={business.phoneHref}>
            Let’s talk catering ↗
          </a>
        </div>
      </div>
    </section>
  );
}
