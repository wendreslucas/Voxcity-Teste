import "./styles.css";

export const Logo = (props) => {
  const { width, height } = props;
  return (
    <div className="DivLogo">
      <img
        alt="Logo da empresa"
        height={height}
        src="/voxcity-logo.png"
        width={width}
      />
    </div>
  );
};
