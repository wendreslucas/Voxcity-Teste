import "./styles.css";

export const InputSenha = (props) => {
  const { Label, onChange, value } = props;

  return (
    <div className="FormControl">
      <span className="InputLabel">{Label}</span>
      <input className="InputSenha" onChange={onChange} value={value} />
    </div>
  );
};
