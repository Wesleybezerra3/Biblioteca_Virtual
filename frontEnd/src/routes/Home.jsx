import { useEffect, useState } from "react";
import axios from "axios";
import  CadastrarLivro  from "./CadastrarLivro";

export default function LivrosList() {
  const [livros, setLivros] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/livros")
      .then((response) => {
        setLivros(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error);
        setError("Erro ao consultar lista de livros!");
      });
  }, []);

  return (
    <>
      <section>
        <h1>Lista de livros</h1>
        <p className="error">{error}</p>
        <ul>
          {livros.map((livro) => (
            <li key={livro.id}>
              {livro.titulo} - {livro.autor}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
