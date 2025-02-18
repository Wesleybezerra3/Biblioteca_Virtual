import React, { useState } from 'react'
import errorIcon from '../../assets/Error.svg'
import sucessIcon from '../../assets/Done.svg'
import './style.css'

export default function CardMessage({message,type}) {
  return (
    <>
     <div style={{display:!message?'none':'block', borderColor:type === 'error'?'red':'green'}} className='card-message'>
        <p style={{color:type ==='error'?'red':'green'}}>{message}</p>
     </div>
    </>
  )
}
