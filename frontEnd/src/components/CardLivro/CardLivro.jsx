import React from 'react'
import './style.css'

export default function CardLivro({titulo, autor}) {
  return (
    <>
    <article className='card'>
      <div className='capaLivro'>
      
      </div>
      <div className='tituloLivro'>
      <p>{titulo}</p>
      </div>
      <div className='autorLivro'>
       <p>
        <p>{autor}</p>
       </p>
      </div>
    </article>
    </>
  )
}
