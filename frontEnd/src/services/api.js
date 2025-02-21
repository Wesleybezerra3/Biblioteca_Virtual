import axios from "axios";

const api = axios.create({
  baseURL: "https://api-capitulo-verde-production.up.railway.app",
});

export default api;