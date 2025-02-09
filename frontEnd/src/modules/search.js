import { req } from "../services/getBooks";

export const search = async(titulo)=>{
    const model = {
        titulo:titulo
    }
    return await req(model)
}