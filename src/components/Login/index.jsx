import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";

export const FormLogin = () => {
  const navigate = useNavigate();
  //const {onSubmit} = React.useContext(LoginContext)

  return (
    <div className="Container">
      <form className="StyleForm">
        <Logo height={"50px"} width={"180px"} />

        <h1> Form Login</h1>
      </form>
    </div>
  );
};
