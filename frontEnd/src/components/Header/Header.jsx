import React from 'react'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import './style.css'

export default function Header() {
  return (
    <>
    
    <header>
        <div className='containerHeader'>
          <div>
              <img src={logo} alt="" className='logo'/>
          </div>
          <div>
            <input type="button" value='favorite' />
            <input type="button" value='perfil' />
          </div>
        </div>
    </header>
    
    </>
  )
}
