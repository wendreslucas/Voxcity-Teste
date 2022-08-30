import React, { useState, useContext } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import { InputName } from "./../Inputs/Nome/index";
import { InputSenha } from "./../Inputs/Senha/index";
import { InputCpf } from "./../Inputs/Cpf/index";
import { RegisterContext } from "../../context/RegisterContext";
import Button from "./../Button/index";

export const AddUser = () => {
  const navigate = useNavigate();
  const { createUser } = useContext(RegisterContext);
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");

  function handleClose() {
    navigate("/");
  }

  function onSubmit(newUser) {
    createUser(newUser);
  }

  return (
    <div className="Container">
      <form className="StyleForm" onSubmit={onSubmit}>
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
              label="Nome*"
              type="text"
              name="name"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputSenha
              Label="Senha*"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              name="senha"
            />
            <InputCpf
              type="number"
              label="CPF*"
              onChange={cpf}
              value={(e) => setCpf(e.target.value)}
            />
          </div>
          <Button text="Save" />
          <div className="DivSpan">
            <Link to="/">
              <span>Já tem uma conta?</span>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};
