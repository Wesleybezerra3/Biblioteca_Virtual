import React, { useEffect, useState,useContext } from "react";
import logo from "../../assets/logo_green.svg";
import userIcon from '../../assets/aside-icons/User.svg'
import {Link} from 'react-router-dom'
import { UserContext } from "../../context/MyContext";
import "./style.css";

export default function Menu({ isVisible }) {
    // Context com informações do usuário
    const {user} = useContext(UserContext)
    const [visible, setVisible] = useState(isVisible)

    useEffect(()=>{
         setVisible(isVisible)
    }, [isVisible])

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      
    } else {
      document.body.style.overflow = "auto";
    }
    return()=>{
        document.body.style.overflow = 'auto';
    }
  }, [visible]);

  return (
    <>
      <div id="back" style={{ display: visible ? "block" : "none" }} onClick={() => setVisible(false)}></div>
      <aside id="menu-home" style={{ display: visible ? "block" : "none" }}>
        <header id="header-menu">
          <button id="close" onClick={() => setVisible(false)}></button>

            <img src={logo} alt="logo capitulo verde" className="logo" />
        </header>

        <section>
          <div className="header-menu">
            {/* <img src={userIcon} alt="" /> */}
            <p>{user?user.nome:''}</p>
            <Link to='/login' className="link-menu btn-login">Login</Link>
            <Link to='/register'className="link-menu btn-register">Cadastra-se</Link>
          </div>
        </section>
      </aside>
    </>
  );
}
