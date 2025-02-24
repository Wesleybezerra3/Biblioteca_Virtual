import api from "./api";
export async function req(filters, page) {
  try {
    let params = {};

    if (page) {
      params.page = page;
    } else {
      params.page = 1;
    }

    if (filters) {
      params.autor = filters.autor;
      params.genero = filters.genero;
    } else {
      params.autor = "";
      params.genero = "";
    }

    const response = await api.get("/livros", {
      params: params
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
