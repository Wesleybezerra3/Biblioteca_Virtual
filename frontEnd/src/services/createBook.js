import axios from "axios";

export async function createBook(){

try{
 const response = await axios.post("http://localhost:5000/livros", livroData)

}catch{

}

}