export const InputName = (props) => {
  const { autoFocus, type, label, margin, onChange, value } = props;
  return (
    <input
      type={type}
      label={label}
      margin={margin}
      onChange={onChange}
      value={value}
      autoFocus={autoFocus}
    />
  );
};
