import React from 'react'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import './style.css'

export default function Header() {
  return (
    <>
    
    <header>
        <div>
            <img src={logo} alt="" className='logo'/>
        </div>
        <div className='containerSearch'>
            <input type="text" name="" id="" className='inputSearch' placeholder='Pesquisar' />
            <button className='btnSearch'></button>
        </div>
        <div>

        </div>
    </header>
    
    </>
  )
}
