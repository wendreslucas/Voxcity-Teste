import React, { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate();

  async function onSubmit(req, res) {}
};
