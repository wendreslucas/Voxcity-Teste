import React, { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Voxcity | Login";
  }, []);

  return (
    <>
      <FormLogin />
    </>
  );
};

export default Login;
