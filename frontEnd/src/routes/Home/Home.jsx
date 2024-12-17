import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import "./style.css";
import CardLivro from "../../components/CardLivro/CardLivro";
import Search from "../../components/Search/Search";

export default function LivrosList() {
  const [livros, setLivros] = useState([]);
  const [error, setError] = useState();

  const atualizarResultados = (data) => {
    console.log(data);
    setLivros(data);
  };

  const getLivros = (e) => {
    // Função para requisições dos livros por categoria.
    let genero;
    if (e) {
      genero = e.target.value;
      console.log(genero);
    }

    axios
      .get("http://localhost:5000/livros", { params: { genero } })
      .then((response) => {
        setLivros(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar livros:", error.message);
        if (error.message) {
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
      <main>
        <aside className="sidebar">
          <ul>
            <li>
              <input onClick={getLivros} type="button" value="Tudo" />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="Romance" />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="Ação" />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="Poesia" />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="Ficção" />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="Infantil" />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="Crônica" />
            </li>
            <li>
              <input
                onClick={getLivros}
                type="button"
                value="Filosofia/Ensaios"
              />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="Teatro" />
            </li>
            <li>
              <input onClick={getLivros} type="button" value="História" />
            </li>
            <li>
              <input
                onClick={getLivros}
                type="button"
                value="Biografia/Autobiografia"
              />
            </li>
          </ul>
        </aside>
        <section className="containerLivros">
          <Search onSearch={atualizarResultados} />
          <ul>
            {}
            {livros.map((livro) => (
              <li key={livro.id_livro} id={livro.id_livro}>
                <CardLivro titulo={livro.titulo} autor={livro.autor} />
              </li>
            ))}
          </ul>
          {/* <input onClick={deleteLivro} type="button" value="X" /> */}
          {/* <a href={livro.caminho_livro} target="_blank">
                  Ler livro
                </a> */}
        </section>
      </main>
    </>
  );
}
