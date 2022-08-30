import { useEffect } from "react";
import { AddUser } from "../../components/AddUser/index";

export const Cadastro = () => {
  useEffect(() => {
    document.title = "Voxcity | Cadastro";
  }, []);

  return (
    <>
      <AddUser />
    </>
  );
};
