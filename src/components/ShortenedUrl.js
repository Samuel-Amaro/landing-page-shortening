import { useState } from "react";
import "./ShortenedUrl.css";

export default function ShortenedUrl(props) {
    const [btnIsPressed, setBtnPressed] = useState(false);

    function handleBtn() {
      setBtnPressed(true);
      navigator.clipboard.writeText(props.urlShortened);
    }

    return (
      <div className="Result-Shortened-Url">
        <span className="result-shortened-url__Old-Url">{props.oldUrl}</span>
        <span className="result-shortened-url__Url-Shortened">
          {props.urlShortened}
        </span>
        <button
          type="button"
          className={
            btnIsPressed
              ? "result-shortened-url__Btn result-shortened-url__Btn_Bg--Dark-Violet"
              : "result-shortened-url__Btn"
          }
          title="Copy new url shortened"
          onPointerDown={handleBtn}
          onKeyDown={event => {
            if(event.code === "Enter") {
              handleBtn();
            }
          }}
        >
          {btnIsPressed ? "Copied!" : "Copy"}
        </button>
      </div>
    );
}