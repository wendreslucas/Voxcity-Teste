import "./styles.css";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const navigate = useNavigate();
  //const {onSubmit} = React.useContext(LoginContext)

  return (
    <div className="Container">
      <form className="StyleForm">
        <h1> Form Login</h1>
      </form>
    </div>
  );
};
