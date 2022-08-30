import "./styles.css";

export const InputName = (props) => {
  const { autoFocus, type, Label, margin, onChange, value } = props;
  return (
    <div className="FormControl">
      <span className="InputLabel">{Label}</span>
      <input
        className="InputNome"
        type={type}
        margin={margin}
        onChange={onChange}
        value={value}
        autoFocus={autoFocus}
      />
    </div>
  );
};
