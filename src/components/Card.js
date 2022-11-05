
export default function Card(props) {
    return (
      <div className="Card">
        <div className="card__Icon-Ilustration">
          <img src={props.urlIcon} alt="" aria-hidden="true" />
        </div>
        <h3 className="card__Title">{props.title}</h3>
        <p className="card__description">{props.text}</p>
      </div>
    );
}