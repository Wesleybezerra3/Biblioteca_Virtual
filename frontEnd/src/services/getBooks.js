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
    return response.data;

  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
}
