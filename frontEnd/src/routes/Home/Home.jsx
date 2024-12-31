import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.svg";
import "./style.css";
import CardLivro from "../../components/CardLivro/CardLivro";
import Search from "../../components/Search/Search";

export default function LivrosList() {

  const [livros, setLivros] = useState([]);
  const [filterData, setFilterData] = useState({
    autor: '',
    genero:''
  })
  const [error, setError] = useState();

  const atualizarResultados = (data) => {
    console.log(data);
    setLivros(data);
  };
  const getData = (e)=>{
      const {name , value} = e.target
      setFilterData({...filterData, [name]: value})
  }

  const filter = (e)=>{
    e.preventDefault();

    requisicao(filterData.autor, filterData.genero)
    console.log(filterData)
  };

  const requisicao = (autor = '', genero = '') => {
    axios
      .get("http://localhost:5000/livros", { params: {autor, genero} })
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
    requisicao()
  }, []);

  // const deleteLivro = (e) => {
  //   const livroId = e.target.parentElement.getAttribute("id");
  //   axios
  //     .delete("http://localhost:5000/livros", { data: { id: livroId } })
  //     .then((response) => {
  //       alert("Livro deletado!");
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.error("erro ao deletar livro!", err);
  //     });
  // };

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

          <form onSubmit={filter} className="filter">
          
              <select name="autor" value={filterData.autor} onChange={getData}>
                <option value="" disabled selected>
                  Autor
                </option>
                <option value="">Nenhum</option>
                <option value="Machado de Assis">Machado de Assis</option>
                <option value="Aluísio Azevedo">Aluísio Azevedo</option>
                <option value="José de Alencar">José de Alencar</option>
                <option value=" Joaquim Manuel de Macedo">
                  Joaquim Manuel de Macedo
                </option>
                <option value="Álvares de Azevedo">Álvares de Azevedo</option>
                <option value="Lima Barreto">Lima Barreto</option>
                <option value="Visconde de Taunay">Visconde de Taunay</option>
                <option value="Frei Vicente do Salvador">
                  Frei Vicente do Salvador
                </option>
              </select>
            

            
              <select name="genero" value={filterData.genero} onChange={getData}>
                <option disabled selected value="">
                  Gênero
                </option>
                <option value="">Nenhum</option>
                <option value="Romance">Romance</option>
                <option value="Crônica">Crônica</option>
                <option value="Ficção">Ficção</option>
                <option value="Ação">Ação</option>
                <option value="História">História</option>
              </select>
            

            <button type="submit">Filtrar</button>
          </form>

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
        </section>
      </main>
    </>
  );
}
