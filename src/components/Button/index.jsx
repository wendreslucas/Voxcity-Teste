import "./styles.css";

function Button(props) {
  const { text, disabled, onClick } = props;

  return (
    <div className="StyleButton" disabled={disabled} onClick={onClick}>
      {text}
    </div>
  );
}

export default Button;
