import "./About.css";
import FoodPhoto from "../FoodPhoto/FoodPhoto.jsx";
export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <div className="about__photo">
          <FoodPhoto variant="homemade" />
          <span>
            Made to dip.
            <br />
            Made to share.
          </span>
        </div>
        <div className="about__copy">
          <p className="eyebrow">The homemade touch</p>
          <h2>
            Little details.
            <br />
            Big difference.
          </h2>
          <p>
            Good wings deserve good company. That’s why we bring homemade French
            fries and homemade ranch dressing to the table.
          </p>
          <p>
            From a quick meal to family night or a game-day gathering, Mino’s is
            all about bold flavors, familiar favorites, and food worth sharing.
          </p>
          <a className="button button--outline" href="#menu">
            Find your next favorite ↗
          </a>
        </div>
      </div>
    </section>
  );
}
