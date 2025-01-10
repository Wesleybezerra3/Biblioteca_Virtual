import { req } from "./requisicao";

export const search = async(titulo)=>{
    const model = {
        titulo:titulo
    }
    return await req(model)
}