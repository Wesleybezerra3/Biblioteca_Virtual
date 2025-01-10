import { useEffect, useState } from "react";

import axios from "axios";

import CardLivro from "../../components/CardLivro/CardLivro";
import Search from "../../components/Search/Search";
import Letras from "../../components/LetrasAnim/letras";
import Filter from "../../components/Filter/Filter";

import { req } from "../../modules/requisicao";

import logo from "../../assets/logo_white.svg";
import "./style.css";


export default function LivrosList() {
  // Estado inicial para armazenar os livros obtidos
  const [books, setBooks] = useState([]);

  // Estado para lidar com erros
  const [error, setError] = useState();

  // Atualiza a lista de livros se ouver pesquisa ou filtragem ou exibe um erro caso nenhum livro seja encontrado
  const updateResult = (data) => {
    console.log(data);
    if (!data) {
      setError("Nenhum Livro encontrado!");
      return;
    }
    setBooks(data);
    setError(null)
  };

  // Obtém a lista inicial de livros ao montar o componente
  useEffect(() => {
    const getBooks = async () => {
      const booksObtained = await req();
      if(!booksObtained){
        setError('Nenhum Livro Encontrado!')
      }else{
        setBooks(booksObtained);
      }
    };
    getBooks();
    console.log(books);
  }, []);

  return (
    <>
      {/* Cabeçalho */}
      <header>
        <div className="containerHeader">
          <div>
            <img src={logo} alt="logo capitulo verde" className="logo" />
          </div>
          <Search onSearch={updateResult} />

          <div>
            <button>modo</button>
            <button className="menu">menu</button>
          </div>
        </div>
      </header>
      {/* Conteúdo Principal */}
      <main>
        <section className="search-filter">
         
          <Filter onFilter={updateResult} />
        </section>

        <section className="books-list">
          <ul>
            {books && books.length > 0 && !error
              ? books.map((book) => (
                  <li key={book.id_livro} id={book.id_livro}>
                    <CardLivro
                      titulo={book.titulo}
                      autor={book.autor}
                      capa={book.capa}
                      link={book.caminho_livro}
                    />
                  </li>
                ))
              : error}
          </ul>
        </section>
      </main>

      <footer>
        
      </footer>
    </>
  );
}
