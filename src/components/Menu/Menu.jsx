import "./Menu.css";
import { sides, wings, business } from "../../utils/constants.js";
import menuImage from "../../assets/images/menu.webp";
export default function Menu() {
  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div className="menu__heading">
          <div>
            <p className="eyebrow">Your cravings start here</p>
            <h2>The good stuff.</h2>
          </div>
          <a
            href={menuImage}
            target="_blank"
            rel="noopener noreferrer"
            className="menu__full"
          >
            View full menu ↗
          </a>
        </div>
        <div className="menu__grid">
          <div className="menu__wings">
            <div className="menu__category">
              <h3>Traditional wings</h3>
              <span>SAUCE IT YOUR WAY</span>
            </div>
            <dl className="menu__rows">
              {wings.map((item) => (
                <div key={item.quantity} className="menu__row">
                  <dt>
                    <strong>{item.quantity} Wings</strong>
                    <span>Up to {item.flavors} flavors</span>
                  </dt>
                  <dd>${item.price}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="menu__sides">
            <p className="eyebrow">A little something extra</p>
            <h3>Sides & extras</h3>
            <dl>
              {sides.map((item) => (
                <div className="menu__side" key={item.name}>
                  <dt>
                    {item.name}
                    {item.note && <small>{item.note}</small>}
                  </dt>
                  <dd>{item.price}</dd>
                </div>
              ))}
            </dl>
            <p className="menu__script">Homemade makes it better.</p>
            <a className="button" href={business.phoneHref}>
              Call to Order ↗
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
