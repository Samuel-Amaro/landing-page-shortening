import Card from "./Card";
import iconRecognition from "../images/icon-brand-recognition.svg";
import iconRecords from "../images/icon-detailed-records.svg";
import iconFully from "../images/icon-fully-customizable.svg";
import "./SectionStatistics.css";

export default function SectionStatistics() {
    return (
      <section
        className="container__Section"
        aria-label="Section Advanced Statistics"
      >
        <div className="section__Content">
          <h2 className="section__Title">Advanced Statistics</h2>
          <p className="section__Description">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="section__Cards">
            <Card
              urlIcon={iconRecognition}
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
            <span className="section__Connection-Bar"></span>
            <Card
              urlIcon={iconRecords}
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <span className="section__Connection-Bar"></span>
            <Card
              urlIcon={iconFully}
              title="Fully Customizable"
              text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            />
          </div>
        </div>
      </section>
    );
}