import React from "react";
import './style.css'

export default function Card({text,data,img,link}) {


  return (
    <>
      <article  className="card-dashboard">
        <div className="card-header">
            <p>
             {text}
            </p>
        </div>

        <div className="card-main">
          
            <div className="card-content">
                <p>
                  {data}
                </p>
            </div>
            <img src={img} alt="" />
        </div>

        <div className="card-footer">
          <button className="btn-details">Ver Detalhes</button>
        </div>
      </article>
    </>
  );
}
