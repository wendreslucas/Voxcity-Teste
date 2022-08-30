import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { InputName } from "./../Inputs/Nome/index";

export const FormLogin = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  //const {onSubmit} = React.useContext(LoginContext)

  return (
    <div className="Container">
      <form className="StyleForm">
        <Logo height={"50px"} width={"180px"} />
        <div className="DivBtn">
          <div className="DivInputs">
            <InputName
              autoFocus
              label="Nome*"
              type="text"
              name="name"
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
        <h1> Form Login</h1>
      </form>
    </div>
  );
};
