import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./../service/api";
import { v4 as uuidv4 } from "uuid";

export const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      nome,
      cpf,
      senha,
    };
    api.post("cadastro", user);
    navigate("/");
  }

  function handleNome(e) {
    setNome(e.target.value);
  }

  function handleSenha(e) {
    setSenha(e.target.value);
  }

  function handleCpf(e) {
    setCpf(e.target.value);
  }

  return (
    <RegisterContext.Provider
      value={{ handleSubmit, handleNome, handleCpf, handleSenha }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
