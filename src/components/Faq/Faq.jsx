import "./Faq.css";
import { faqs } from "../../utils/constants.js";
export default function Faq() {
  return (
    <section id="faqs" className="faq section">
      <div className="container faq__grid">
        <div>
          <p className="eyebrow">A little food for thought</p>
          <h2>
            Good questions.
            <br />
            Tasty answers.
          </h2>
          <p className="section__intro">
            Everything you need to get your order started.
          </p>
        </div>
        <div className="faq__items">
          {faqs.map((faq) => (
            <details className="faq__item" key={faq.question} name="faqs">
              <summary>
                <span>{faq.question}</span>
                <span className="faq__plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
