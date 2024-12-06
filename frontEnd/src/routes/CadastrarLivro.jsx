import axios from "axios";

import { useEffect, useState } from "react";
export default function CadastrarLivro() {

  const [livroData, setLivroData] = useState({
    titulo: "",
    autor: "",
    editora: "",
    ano_de_publicacao: null ,
    genero: "",
    disponibilidade: true,
  })


 function getValues(e){
  const {name, value} = e.target;
  setLivroData({...livroData, [name]: value})
 }


  function cadastarLivro(e){

    for(let i in livroData){ 
       if(!livroData[i]){
        alert('Todos os campos precisam estar preenchidos.')
        return null;
       }
    }
    e.preventDefault();
    axios
      .post("http://localhost:5000/livros", livroData)
      .then((response) => {
        alert("Livro adicionado com sucesso!");
        console.log(livroData)
      })
      .catch((error) => {
        console.error("Erro ao adicionar o livro:", error);
      }); 
}

  return(
    <>
    <section>
      <h2>Cadastrar Livro</h2> 

      <form onSubmit={cadastarLivro}>

      <div>
        <label>Título:</label>
        <input
          type="text"
          name="titulo"
          value={livroData.titulo}
          onChange={getValues}
        />
      </div>

      <div>
        <label>Autor:</label>
        <input
          type="text"
          name="autor"
          value={livroData.autor}
          onChange={getValues}
        />
      </div>

      <div>
        <label>editora:</label>
        <input
          type="text"
          name="editora"
          value={livroData.editora}
          onChange={getValues}
        />
      </div>

      <div>
        <label>Ano De Publicação:</label>
        <input
          type="text"
          name="ano_de_publicacao"
          value={livroData.ano_de_publicacao}
          onChange={getValues}
        />
      </div>

      <div>
        <label>Gênero:</label>
        
        <select name="genero" value={livroData.genero} onChange={getValues}>
          <option disabled value=''>-- Selecione --</option>
          <option value="Ação">Ação</option>
          <option value="Aventura">Aventura</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Ficção Científica">Ficção Científica</option>
          <option value="Mistério">Mistério</option>
          <option value="Romance">Romance</option>
          <option value="Terror">Terror</option>
          <option value="Thriller">Thriller</option>
          <option value="Distopia">Distopia</option>
          <option value="Drama">Drama</option>
          <option value="Policia">Policial</option>
          <option value="Mitologia">Mitologia</option>
          <option value="Infantil">Infantil</option>
          <option value="Biografia e Autobiografia">Biografia e Autobiografia</option>
          <option value="Negócios e Economia">Negócios e Economia</option>
        </select>
      </div>

      <button type="submit">Adicionar Livro</button>

      </form>
    </section>
    </>
  )
}