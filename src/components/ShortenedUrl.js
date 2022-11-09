import "./ShortenedUrl.css";

export default function ShortenedUrl(props) {
    return (
      <div className="Result-Shortened-Url">
        <span className="result-shortened-url__Old-Url">{props.oldUrl}</span>
        <span className="result-shortened-url__Url-Shortened">
          {props.urlShortened}
        </span>
        <button type="button" className="result-shortened-url__Btn" title="Copy new url shortened">Copy</button>
      </div>
    );
}