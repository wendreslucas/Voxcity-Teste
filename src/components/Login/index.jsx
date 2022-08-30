import React, { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { InputName } from "./../Inputs/Nome/index";
import { InputSenha } from "./../Inputs/Senha/index";
import { LoginContext } from "./../../context/LoginContext";
import Button from "./../Button/index";
import useForm from "./../../hooks/useForm";

function FormLogin() {
  const navigate = useNavigate();
  const { onSubmit } = React.useContext(LoginContext);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  function handleCreate() {
    navigate("/cadastro");
  }

  return (
    <div className="Container">
      <form className="StyleForm" onSubmit={onSubmit}>
        <Logo height={"50px"} width={"180px"} />
        <div className="DivBtn">
          <div className="DivInputs">
            <InputName
              autoFocus
              Label="Nome*"
              type="text"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputSenha
              Label="Senha*"
              name="senha"
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              value={senha}
            />
          </div>
          <Button text="Enter" />
          <div className="DivSpan">
            <button className="btn" onClick={handleCreate}>
              Novo por aqui? Cadastre-se aqui!
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormLogin;
