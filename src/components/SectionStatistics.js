import Card from "./Card";
import iconRecognition from "../images/icon-brand-recognition.svg";
import iconRecords from "../images/icon-detailed-records.svg";
import iconFully from "../images/icon-fully-customizable.svg";
import "./SectionStatistics.css";
import ShortenedUrl from "./ShortenedUrl";

export default function SectionStatistics() {
    return (
      <section
        className="container__Section-Statistics"
        aria-label="Section Advanced Statistics"
      >
        {/*<ul className="container__List-Urls-Shortened">
          <li className="container__Item-Shortened">
            <ShortenedUrl
              oldUrl="https://www.frontendmentor.io"
              urlShortened="https://rel.ink/k41Kyk"
            />
          </li>
          <li className="container__Item-Shortened">
            <ShortenedUrl
              oldUrl="https://www.frontendmentor.io"
              urlShortened="https://rel.ink/k41Kyk"
            />
          </li>
          <li className="container__Item-Shortened">
            <ShortenedUrl
              oldUrl="https://www.frontendmentor.io"
              urlShortened="https://rel.ink/k41Kyk"
            />
          </li>
        </ul>*/}
        <div className="container__Content">
          <h2 className="container__Title">Advanced Statistics</h2>
          <p className="container__Description">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className="container__Cards">
            <Card
              urlIcon={iconRecognition}
              title="Brand Recognition"
              text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            />
            <span className="container__Connection-Bar"></span>
            <Card
              urlIcon={iconRecords}
              title="Detailed Records"
              text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            />
            <span className="container__Connection-Bar"></span>
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