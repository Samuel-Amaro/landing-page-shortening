import Button from "./Button";

export default function SectionBoost() {
    return (
      <section className="container__Section" aria-label="Section Boost">
        <div className="section__Content">
          <h2 className="section__Title">Boost your links today</h2>
          <Button type="button" className="section__btn" title="Get Started">
            Get Started
          </Button>
        </div>
      </section>
    );
}