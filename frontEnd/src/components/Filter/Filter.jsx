import React, { useState } from "react";
import { filter } from "../../modules/filter";
import './style.css'

export default function Filter({onFilter}) {
  // Estado inicial para armazenar os critérios de filtro (autor e gênero)
  const [filterData, setFilterData] = useState({
    autor: "",
    genero: "",
  });

  // Atualiza os critérios de filtro com os valores do formulário
  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilterData({ ...filterData, [name]: value });
  };

   // Filtra os livros com base nos critérios definidos pelo usuário
  const applyBookFilter = (e) => {
    e.preventDefault();
    (async () => {
      const booksObtained = await filter(filterData.autor, filterData.genero);
      if (!booksObtained) {
        onFilter(false);
        return;
      }
      onFilter(booksObtained);
    })();
  };

  return (
    <>
      <form onSubmit={applyBookFilter} className="filter">

        <div className="container-autor-genero">
          <select name="autor" className="autor-select" value={filterData.autor} onChange={handleFilter}>
            <option value="" disabled selected>
              Autor
            </option>
            <option value="">Nenhum</option>
            <option value="Machado de Assis">Machado de Assis</option>
            <option value="Aluísio Azevedo">Aluísio Azevedo</option>
            <option value="José de Alencar">José de Alencar</option>
            <option value=" Joaquim Manuel de Macedo">
              Joaquim Manuel de Macedo
            </option>
            <option value="Álvares de Azevedo">Álvares de Azevedo</option>
            <option value="Lima Barreto">Lima Barreto</option>
            <option value="Visconde de Taunay">Visconde de Taunay</option>
            <option value="Frei Vicente do Salvador">
              Frei Vicente do Salvador
            </option>
          </select>
          <select name="genero" className="genero-select" value={filterData.genero} onChange={handleFilter}>
            <option disabled selected value="">
              Gênero
            </option>
            <option value="">Nenhum</option>
            <option value="Romance">Romance</option>
            <option value="Crônica">Crônica</option>
            <option value="Ficção">Ficção</option>
            <option value="Ação">Ação</option>
            <option value="História">História</option>
          </select>
        </div>

        <button className="btn-filter" type="submit">Filtrar</button>
      </form>
    </>
  );
}
