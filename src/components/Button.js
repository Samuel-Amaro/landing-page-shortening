
export default function Button(props) {
    return (
        <button type={props.type} className={props.className}>{props.children}</button>
    );
}