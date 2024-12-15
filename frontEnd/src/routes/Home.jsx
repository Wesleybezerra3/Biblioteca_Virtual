import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header/Header";

export default function LivrosList() {
  const [livros, setLivros] = useState([]);
  const [error, setError] = useState();

  const getLivros = (e) => { // Função para requisições dos livros por categoria.
    let genero;

    if(e){ 
      genero = e.target.value; 
      console.log(genero)
    }
    
    axios
      .get("http://localhost:5000/livros", {params:{genero}})
      .then((response) => {
        setLivros(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error.message);
        if(error.message){
          console.error("Resposta do servidor:", error.response.data);
        }
        setError("Erro ao consultar lista de livros!");
      });
  };

   useEffect(() => {
     getLivros();
   }, []);

  const deleteLivro = (e) => {
    const livroId = e.target.parentElement.getAttribute("id");
    axios
      .delete("http://localhost:5000/livros", { data: { id: livroId } })
      .then((response) => {
        alert("Livro deletado!");
        console.log(response.data);
      })
      .catch((err) => {
        console.error("erro ao deletar livro!", err);
      });
  };

  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <input onClick={getLivros} type="button" value='Recomendados' />
          </li>
          <li>
          <input onClick={getLivros} type="button" value='Romance' />
            
          </li>
          <li>
          <input onClick={getLivros} type="button" value='Ação' />
          </li>
        </ul>
      </nav>
      <section>
        <h1>Lista de livros</h1>
        <p className="error">{error}</p>
        <ul>
          {livros.map((livro) => (
            <li key={livro.id_livro} id={livro.id_livro}>
              {livro.titulo} - {livro.autor}
              <input onClick={deleteLivro} type="button" value="X" />
              <a href={livro.caminho_livro} target="_blank">
                Ler livro
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
