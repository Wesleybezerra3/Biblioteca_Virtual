import axios from "axios";
export async function req(model) {
  const limit = 10;
  const page = 1;
  try {
    let filterParams = {};
    let pageParams = {}

    if (page && limit) {
      pageParams.limit = limit;
      pageParams.page = page;
    } else {
      pageParams.limit = 10;
      pageParams.page = 1;
    }

    if (model) {
      filterParams = model;
    } else {
      filterParams = "";
    }

    const response = await axios.get("http://localhost:5000/livros", {
      params: filterParams,
    });

    if (response.data.length === 0) {
      return false;
    }
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return [];
  }
}
