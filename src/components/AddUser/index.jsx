import React, { useContext } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { InputName } from "./../Inputs/Nome/index";
import { InputSenha } from "./../Inputs/Senha/index";
import { InputCpf } from "./../Inputs/Cpf/index";
import { RegisterContext } from "../../context/RegisterContext";
import Button from "./../Button/index";

export function AddUser() {
  const navigate = useNavigate();
  const { handleSubmit, nome, senha, cpf, handleNome, handleSenha, handleCpf } =
    useContext(RegisterContext);

  function handleClose() {
    navigate("/");
  }

  return (
    <div className="Container">
      <form className="StyleForm">
        <div className="DivHeader">
          <Logo height={"50px"} width={"180px"} />
          <button className="btn" onClick={handleClose}>
            X
          </button>
        </div>
        <div className="DivBtn">
          <div className="DivInputs">
            <InputName
              autoFocus
              Label="Nome*"
              type="text"
              name="nome"
              value={nome}
              onChange={handleNome}
            />
            <InputSenha
              Label="Senha*"
              type="password"
              value={senha}
              onChange={handleSenha}
              name="senha"
            />
            <InputCpf
              type="number"
              Label="CPF*"
              name="cpf"
              onChange={handleCpf}
              value={cpf}
            />
          </div>
          <Button text="Save" onClick={handleSubmit} />
          <div className="DivSpan">
            <Link to="/">
              <span>Já tem uma conta?</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
