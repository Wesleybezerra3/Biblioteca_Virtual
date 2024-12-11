import { useEffect, useState } from "react";
import axios from "axios";

export default function LivrosList() {
  const [livros, setLivros] = useState([]);
  const [error, setError] = useState();

  const reqLivros = () => {
    axios
      .get("http://localhost:5000/livros")
      .then((response) => {
        setLivros(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error);
        setError("Erro ao consultar lista de livros!");
      });
  };

  useEffect(()=>{
     const interval = setInterval(()=>{
        reqLivros();
     },2000);
     return () => {
      clearInterval(interval);
    };
  },[])



  function remove(e){
    const livroId = e.target.parentElement.getAttribute("id")

    axios.delete("http://localhost:5000/livros/delete", {data:{id: livroId}})
    .then((response) =>{
      // alert('Livro deletado!')
      console.log('Livro deletado')
    })
    .catch((err)=>{
      console.error('erro ao deletar livro!',err)
    })
  }

  return (
    <>
      <section>
        <h1>Lista de livros</h1>
        <p className="error">{error}</p>
        <ul>
          {livros.map((livro) => (
            <li 
             key={livro.id_livro}
             id={livro.id_livro}  
            >
              {livro.titulo} - {livro.autor}
              <input onClick={remove} type="button" value="X" />
              <a href={livro.caminho_livro} target="_blank">Ler livro</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
 