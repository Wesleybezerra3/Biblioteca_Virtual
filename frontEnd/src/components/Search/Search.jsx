import React from "react";
import "./style.css";
import axios from "axios";

export default function Search({onSearch}) {
  const buscarLivro = () => {
    const titulo = document.querySelector(".inputSearch").value;
     axios
      .get("http://localhost:5000/livros/search", { params: { titulo } })
      .then((response) => {
        onSearch(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.error("Erro ao pesquisar livros:", err);
      });
  };

  return (
    <div className="containerSearch">
      <input
        type="text"
        name=""
        id=""
        className="inputSearch"
        placeholder="Pesquisar"
      />
      <button className="btnSearch" onClick={buscarLivro}></button>
    </div>
  );
}
