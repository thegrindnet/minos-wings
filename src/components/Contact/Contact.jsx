import "./Contact.css";
import { business } from "../../utils/constants.js";
export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <p className="eyebrow">Your next great meal is one call away</p>
        <h2>Hungry? Let’s fix that.</h2>
        <a href={business.phoneHref} className="contact__phone">
          {business.phone} <span aria-hidden="true">↗</span>
        </a>
        <p>Tell us your order. Pick your flavors. We’ll take it from there.</p>
        <div className="contact__details">
          <div>
            <h3>Serving</h3>
            <p>{business.serviceArea}</p>
            <small>Call to confirm pickup details.</small>
          </div>
          <div>
            <h3>Hours</h3>
            <p>{business.hours}</p>
            <small>Call for weekend availability.</small>
          </div>
          <div>
            <h3>Stay connected</h3>
            {business.emailVerified ? (
              <a href={`mailto:${business.email}`}>{business.email}</a>
            ) : (
              <p className="contact__pending">Email: to be supplied</p>
            )}
            {business.facebookVerified ? (
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Find us on Facebook ↗
              </a>
            ) : (
              <small>Facebook page: to be supplied</small>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
