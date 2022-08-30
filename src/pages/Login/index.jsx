import React, { useEffect } from "react";
import { FormLogin } from "./../../components/Login/index";

export const Login = () => {
  useEffect(() => {
    document.title = "Voxcity | Login";
  }, []);

  return (
    <>
      <FormLogin />
    </>
  );
};
