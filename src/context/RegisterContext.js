import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./../service/api";

export const RegisterContext = createContext();

export const RegisterContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const createUser = async (newUser) => {
    const user = {
      nome: newUser.nome,
      senha: newUser.senha,
      cpf: newUser.cpf,
    };
    try {
      await api.post("/user/register", user);
      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <RegisterContext.Provider value={{ createUser }}>
      {children}
    </RegisterContext.Provider>
  );
};
