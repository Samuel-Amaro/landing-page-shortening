import "./App.css";
import Header from "./Header";
import SectionStatistics from "./SectionStatistics";
import SectionBoost from "./SectionBoost";
import Footer from "./Footer";
import { useState } from "react";
import {getAllUrlShorten} from "../api/api";

function App() {
  const[urlsShorteneds, setUrlsShorteneds] = useState(getAllUrlShorten());
  return (
    /*<div className="App"></div>*/
    <>
      <Header setUrlsShorteneds={setUrlsShorteneds} />
      <SectionStatistics urlsShorteneds={urlsShorteneds}/>
      <SectionBoost />
      <Footer />
    </>
  );
}

export default App;
