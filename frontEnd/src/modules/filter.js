import {req} from "../services/getBooks";

export const filter = async (autor, genero) => {
  const model = {
    autor: autor,
    genero: genero
  }
  return await req(model);
};
