import React from "react";
import "./style.css";

export default function CardLivro({ titulo, autor, capa, link }) {
  return (
    <>
      <article className="card">
        <div className="capaLivro">
          <img src={capa} alt={`Capa do livro ${titulo}`} />
        </div>
        <div className="infoLivro">
          <p>{titulo}</p>
          <p>{autor}</p>
        </div>
        <div className="link">
          <a target="_blank" href={link}>
            Ler/Baixar
          </a>
        </div>
      </article>
    </>
  );
}
