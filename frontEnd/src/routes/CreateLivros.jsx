import axios from "axios";
import { useEffect, useState } from "react";

export default function CadastrarLivro() {

  const [livroData, setLivroData] = useState({
    titulo: "",
    autor: "",
    editora: "",
    ano_de_publicacao: null ,
    genero: "",
    caminho_livro: "",
    capa:""
  })


 function getData(e){
  const {name, value} = e.target;
  setLivroData({...livroData, [name]: value})
 }


  const createLivro = (e) =>{
    e.preventDefault();

    for(let i in livroData){ 
       if(!livroData[i]){
        alert('Todos os campos precisam estar preenchidos.')
        return null;
       }
    }

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

      <form onSubmit={createLivro}>

      <div>
        <label>Título:</label>
        <input
          type="text"
          name="titulo"
          value={livroData.titulo}
          onChange={getData}
        />
      </div>

      <div>
        <label>Autor:</label>
        <input
          type="text"
          name="autor"
          value={livroData.autor}
          onChange={getData}
        />
      </div>

      <div>
        <label>editora:</label>
        <input
          type="text"
          name="editora"
          value={livroData.editora}
          onChange={getData}
        />
      </div>

      <div>
        <label>Ano De Publicação:</label>
        <input
          type="text"
          name="ano_de_publicacao"
          value={livroData.ano_de_publicacao}
          onChange={getData}
        />
      </div>

      <div>
        <label>Gênero:</label>
        
        <select name="genero" value={livroData.genero} onChange={getData}>
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
          <option value="Ficção">Ficção</option>
          <option value="História">História</option>
          <option value="Biografia e Autobiografia">Biografia e Autobiografia</option>
          <option value="Negócios e Economia">Negócios e Economia</option>
        </select>
      </div>

      <div>
        <label>Caminho do livro</label>
        <input
          type="text"
          name="caminho_livro"
          value={livroData.caminho_livro}
          onChange={getData}
        />
      </div>
      <div>
        <label >Caminho da Capa</label>
        <input
          type="text"
          name="capa"
          value={livroData.capa}
          onChange={getData}
        />
      </div>

      <button type="submit">Adicionar Livro</button>

      </form>
    </section>
    </>
  )
}
