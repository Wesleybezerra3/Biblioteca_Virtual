import {req} from "../modules/requisicao";

export const filter = async (autor, genero) => {
  console.log(await req(autor, genero))
  const model = {
    autor: autor,
    genero: genero
  }
  return await req(model);
};
