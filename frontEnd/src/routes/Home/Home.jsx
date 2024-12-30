import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.svg";
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
      <header>
        <div className="containerHeader">
          <div>
            <img src={logo} alt="logo capitulo verde" className="logo" />
          </div>
          <div>
            <span>D</span>
            <span>e</span>
            <span>s</span>
            <span>c</span>
            <span>u</span>
            <span>b</span>
            <span>r</span>
            <span>a</span>
            <span> o</span>
            <span>s </span>
            <span>M</span>
            <span>a</span>
            <span>i</span>
            <span>o</span>
            <span>r</span>
            <span>e</span>
            <span>s</span>
            <span> C</span>
            <span>l</span>
            <span>á</span>
            <span>s</span>
            <span>s</span>
            <span>i</span>
            <span>c</span>
            <span>o</span>
            <span>s</span>
            <span> d</span>
            <span>a</span>
            <span> L</span>
            <span>i</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>u</span>
            <span>r</span>
            <span>a</span>
            <span> B</span>
            <span>r</span>
            <span>a</span>
            <span>s</span>
            <span>i</span>
            <span>l</span>
            <span>e</span>
            <span>i</span>
            <span>r</span>
            <span>a</span>
            {/* Descubra os Maiores Clássicos da Literatura Brasileira */}
          </div>
          <div>
            <button>modo</button>
             <button className="menu">menu</button>
          </div>
        </div>
      </header>
      <main>
        <section className="containerLivros">
          <Search onSearch={atualizarResultados} />

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
                <input onClick={getLivros} type="button" value="História" />
              </li>
            </ul>
          </aside>

          <ul>
            {}
            {livros.map((livro) => (
              <li key={livro.id_livro} id={livro.id_livro}>
                <CardLivro
                  titulo={livro.titulo}
                  autor={livro.autor}
                  capa={livro.capa}
                  link={livro.caminho_livro}
                />
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
