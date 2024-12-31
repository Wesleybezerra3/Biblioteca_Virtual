import React, { useState } from "react";
import "./style.css";
import axios from "axios";

export default function Search({onSearch}) {
  const [titulo, setTitulo] = useState()
  const buscarLivro = () => {
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
        className="inputSearch"
        placeholder="Pesquisar"
        value={titulo}
        onChange={(e)=>{
          setTitulo(e.target.value)
        }}
      />
      <button className="btnSearch" onClick={buscarLivro}></button>
    </div>
  );
}
