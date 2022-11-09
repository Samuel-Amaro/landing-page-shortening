import Button from "./Button";
import "./SectionBoost.css";

export default function SectionBoost() {
    return (
      <section className="container__Section-Boost" aria-label="Section Boost">
        <div className="section__Content">
          <h2 className="section__Title">Boost your links today</h2>
          <button type="button" className="section__btn" title="Get Started">
            Get Started
          </button>
        </div>
      </section>
    );
}