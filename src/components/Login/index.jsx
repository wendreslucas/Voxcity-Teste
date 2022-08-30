import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { InputName } from "./../Inputs/Nome/index";
import { InputSenha } from "./../Inputs/Senha/index";
import { InputCpf } from "./../Inputs/Cpf/index";
import useForm from "../../hooks/useForm";
import { LoginContext } from "./../../context/LoginContext";

export const FormLogin = () => {
  const [name, setName] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const { onSubmit } = React.useContext(LoginContext);

  function handleCreate() {
    navigate("/cadaster");
  }

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
            <InputSenha
              Label="Senha*"
              type="password"
              value={value}
              onChange={onChange}
              name="senha"
            />
            <InputCpf
              type="number"
              label="CPF*"
              onChange={onChange}
              value={value}
            />
          </div>
          <button className="Button" text="Enter" />
          <div className="DivSpan">
            <button className="btn" onClick={handleCreate}>
              Novo por aqui? Cadastre-se aqui!
            </button>
          </div>
        </div>
        <h1> Form Login</h1>
      </form>
    </div>
  );
};
