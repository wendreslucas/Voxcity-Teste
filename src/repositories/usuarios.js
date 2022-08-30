import { api } from "./../service/api";

const createUser = async (values) => {
  const user = {
    nome: values.nome,
    senha: values.senha,
    cpf: values.cpf,
  };
  try {
    await api.post("/users", user);
  } catch (error) {
    console.error(error);
  }
};

export default {
  createUser,
};
