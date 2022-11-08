import "./Button.css";

export default function Button(props) {
    return (
        <button type={props.type} className={props.className} title={props.title}>{props.children}</button>
    );
}