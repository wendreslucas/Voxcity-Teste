export const InputCpf = (props) => {
  const { type, label, onChange, value } = props;

  return <input type={type} label={label} onChange={onChange} value={value} />;
};
