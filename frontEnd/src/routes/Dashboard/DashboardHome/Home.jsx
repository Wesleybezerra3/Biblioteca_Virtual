import React, { useEffect, useState } from "react";
import Card from "../../../components/Card-dashboard/Card";
import books from "../../../assets/aside-icons/Books.svg";
import book from "../../../assets/aside-icons/book.svg";
import user from "../../../assets/aside-icons/User.svg";
import statistics from "../../../assets/aside-icons/Statistics.svg";
import todo from "../../../assets/aside-icons/Todo List.svg";
import "./style.css";
import CardAtt from "../../../components/Card-atividades/CardAtv";
import axios from "axios";

export default function DashboardHome() {
  const [countBooks, setCountBooks] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/livros/count");
        if (!response.data.countBooks) {
          console.log("Nenhum dado encontrado.");
          return;
        }
        console.log("Qtd obtidas de livros:", response.data);

        setCountBooks(response.data.countBooks);
      } catch (err) {
        console.error("Erro ao obter Qtd: ", err);
      }
    };
    fetchCounts();
  }, []);

  return (
    <>
      <div id="container-home">
        <section id="container-card">
          <div className="p-title">
            <img src={statistics} alt="" />
            <p>Estatistícas</p>
          </div>

          <div id="cards">
            <Card text={"Livros Pendentes"} data={0} img={books} link={""} />
            <Card
              text={"Livros Registrados"}
              data={countBooks || 0}
              img={book}
              link={""}
            />
            <Card text={"Usuários Registrados"} data={0} img={user} link={""} />
          </div>
        </section>
        <section id="container-atividades">
          <div className="p-title">
            <img src={todo} alt="" />
            <p>Atividades Recentes</p>
          </div>

          <div id="atividades">
            <CardAtt
              data={"Livro “Dom Casmurro” Registrado por Wesley em xx/xx/xxxx"}
            />
            <CardAtt
              data={"Livro “ O Cortiço ” Deletado por Wesley em xx/xx/xx"}
            />
            <CardAtt
              data={"Livro “Dom Casmurro” Registrado por Wesley em xx/xx/xxxx"}
            />
            <CardAtt
              data={"Livro “Dom Casmurro” Registrado por Wesley em xx/xx/Título, Autor e Descrição do livro 'Dom Casmurro' foram alterados por Wesley em 06/01/2025"}
            />
            <CardAtt
              data={"Livro “Dom Casmurro” Registrado por Wesley em xx/xx/xxxx"}
            />
            <CardAtt
              data={"Livro “Dom Casmurro” Registrado por Wesley em xx/xx/xxxx"}
            />
            <CardAtt
              data={"Livro “Dom Casmurro” Registrado por Wesley em xx/xx/xxxx"}
            />
            <CardAtt
              data={"Livro “Dom Casmurro” Registrado por Wesley em xx/xx/xxxx"}
            />
          </div>
        </section>
      </div>
    </>
  );
}
