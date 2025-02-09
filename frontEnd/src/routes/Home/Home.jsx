import { useEffect, useState } from "react";

import CardLivro from "../../components/CardLivro/CardLivro";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Menu from "../../components/Menu/Menu";

import { req } from "../../services/getBooks";

import logo from "../../assets/logo_white.svg";
import menuIcon from '../../assets/Menu.svg'
import "./style.css";


export default function LivrosList() {
  // Estado inicial para armazenar os livros obtidos
  const [books, setBooks] = useState([]);

  // Estado para lidar com erros
  const [error, setError] = useState();

  const [visible, setVisible] = useState(false);

  // Atualiza a lista de livros se ouver pesquisa ou filtragem ou exibe um erro caso nenhum livro seja encontrado
  const updateResult = (data) => {
    console.log(data);
    if (!data) {
      setError("Nenhum Livro encontrado!");
      return;
    }
    setBooks(data);
    setError(null);
  };

  const activeMenu = () => {};

  // Obtém a lista inicial de livros ao montar o componente
  useEffect(() => {
    const getBooks = async () => {
      const booksObtained = await req();
      if (!booksObtained) {
        setError("Nenhum Livro Encontrado!");
      } else {
        setBooks(booksObtained);
      }
    };
    getBooks();
    // console.log(books);
  }, []);

  return (
    <>
      {/* Cabeçalho */}
      <header id="home-header">
        <div className="containerHeader">
          <div>
            <img src={logo} alt="logo capitulo verde" className="logo" />
          </div>
          <Search onSearch={updateResult} />

          <div>
            <button
              className="menu-home-btn"
              onClick={() => setVisible((prevState) => !prevState)}
            >
            </button>
          </div>
        </div>
      </header>
      <Menu isVisible={visible} />
      {/* Conteúdo Principal */}
      <main id="home-main ">
        <section className="search-filter">
          <Filter onFilter={updateResult} />
        </section>

        <section className="books-list">
          <ul>
            {books && books.length > 0 && !error
              ? books.map((book) => (
                  <li key={book.id} id={book.id}>
                    <CardLivro
                      titulo={book.titulo}
                      autor={book.autor}
                      capa={book.capa_livro_url}
                      link={book.arquivo_livro_url}
                    />
                  </li>
                ))
              : error}
          </ul>
        </section>
      </main>

      <footer></footer>
    </>
  );
}
