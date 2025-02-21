import { useEffect, useState, useContext } from "react";


import CardLivro from "../../components/CardLivro/CardLivro";
import Search from "../../components/Search/Search";
import Filter from "../../components/Filter/Filter";
import Menu from "../../components/Menu/Menu";

import { req } from "../../services/getBooks";
import api from "../../services/api";

import logo from "../../assets/logo_white.svg";

import "./style.css";
import { UserContext } from "../../context/UserContext";


export default function Home() {
  const { user, logUser } = useContext(UserContext);
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

  // Obtém a lista inicial de livros e autentica o usuário ao montar o componente
  useEffect(() => {
    const getBooks = async () => {
      try{
        const booksObtained = await req();
        console.log('livros obtidos da api:',booksObtained);
        setBooks(booksObtained);
  
        if(!Array.isArray(booksObtained)){
          console.log('erro: resposta inesperada da API')
          return;
        }
      }catch(err){
        console.error("Erro ao buscar livros:", err);
      }
    };

    const getUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return null;
        }
        const response = await api.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const user = response.data;
        logUser(user);
      } catch (error) {
        console.log("Erro ao realizar autenticação ou usuário não logado.");
      }
    };
    getUser();
    getBooks();
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
            ></button>
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
