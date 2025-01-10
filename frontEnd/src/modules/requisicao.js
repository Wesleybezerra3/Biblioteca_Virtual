import axios from "axios";
export async function req(model) {

  try {
    let params = {};
    if(model){
      params = model;
    }else{
      params =''
    }
  
    const response = await axios.get("http://localhost:5000/livros", {
      params:params,
    });

    if(response.data.length === 0 ){
      return false;
    }
    console.log("Livros obtidos com sucesso!", response.data);
    return response.data;

  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    if (error.message) {
      console.error("Resposta do servidor:", error);
    }
    return [];
  }
}
