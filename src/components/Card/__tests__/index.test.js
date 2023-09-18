import "@testing-library/jest-dom";
import { render} from "@testing-library/react";
import iconRecognition from "../../../images/icon-recognition.svg";
import iconRecords from "../../../images/icon-records.svg";
import iconFully from "../../../images/icon-customizable.svg";
import Card from "..";

describe("componente Card", () => {
  it("renderiza componente Brand Recognition Card sem erros", () => {
    render(<Card
      urlIcon={iconRecognition}
      title="Brand Recognition"
      text="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
    />);
  });

  it("renderiza componente Card Detailed Records sem erros", () => {
    render(<Card
      urlIcon={iconRecords}
      title="Detailed Records"
      text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    />);
  });

  it("renderiza componente Card Fully Customizable sem erros", () => {
    render(<Card
      urlIcon={iconFully}
      title="Fully Customizable"
      text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    />);
  });
});