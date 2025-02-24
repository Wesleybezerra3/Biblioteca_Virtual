import {req} from "../services/getBooks";

export const filter = async (autor, genero) => {
  const filters = {
    autor: autor,
    genero: genero
  }
  return await req(filters);
};
