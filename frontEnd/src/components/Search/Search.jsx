import React, { useEffect, useState } from "react";
import "./style.css";
import { search } from "../../modules/search";
import axios from "axios";

export default function Search({ onSearch, btn_color }) {
  const [titulo, setTitulo] = useState("");

  const searchBooks = async ()=>{
    if(titulo){
      onSearch(await search(titulo))
    }
   
  }
  return (
    <div className="containerSearch">
      <input
        type="text"
        className="inputSearch"
        placeholder="Pesquisar"
        value={titulo}
        onChange={(e) => {
          setTitulo(e.target.value);
        }}
      />
      <button style={{backgroundColor: btn_color}} className="btnSearch" onClick={searchBooks}></button>
    </div>
  );
}
