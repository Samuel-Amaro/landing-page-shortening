import Card from "./Card";
import iconRecognition from "../images/icon-recognition.svg";
import iconRecords from "../images/icon-records.svg";
import iconFully from "../images/icon-customizable.svg";
import "./SectionStatistics.css";
import ShortenedUrl from "./ShortenedUrl";
import React from "react";

export default function SectionStatistics(props) {
  return (
    <section
      className="container__Section-Statistics"
      aria-label="Section Advanced Statistics"
    >
      {props.urlsShorteneds.length === 0 ? (
        ""
      ) : (
        <ul
          className="container__List-Urls-Shortened"
          aria-label="List from Urls shortened"
          aria-live="assertive"
          aria-atomic="true"
        >
          {props.urlsShorteneds.map((item, index) => {
            //console.log(item.join().split(","));
            //let splits = item.split(",");
            let splits = item.join(",").split(",");
            return (
              <li className="container__Item-Shortened" key={index}>
                <ShortenedUrl oldUrl={splits[1]} urlShortened={splits[0]} />
              </li>
            );
          })}
        </ul>
      )}
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
