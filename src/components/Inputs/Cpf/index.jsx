import "./styles.css";

export const InputCpf = (props) => {
  const { type, Label, onChange, value } = props;

  return (
    <div className="FormControl">
      <span className="InputLabel">{Label}</span>
      <input
        className="InputCpf"
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
