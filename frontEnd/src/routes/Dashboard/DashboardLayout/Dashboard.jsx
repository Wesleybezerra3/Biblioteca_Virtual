import React, { useState } from "react";
import "./style.css";
import { Link, Outlet } from "react-router-dom";
import Search from "../../../components/Search/Search";

import menu from "../../../assets/aside-icons/Menu Vertical.svg";
import logo from "../../../assets/logo_green.svg";
import addBook from "../../../assets/addBook.svg";
import notification from "../../../assets/Notification.svg";
import books from "../../../assets/aside-icons/Books.svg";
import book from "../../../assets/aside-icons/book.svg";
import setting from "../../../assets/aside-icons/Settings.svg";
import home from "../../../assets/aside-icons/Home.svg";
import user from "../../../assets/aside-icons/User.svg";
import door from "../../../assets/aside-icons/Door.svg";
import todo from "../../../assets/aside-icons/Todo List.svg";

import CreateLivro from "../../CreateLivros";

export default function Dashboard() {

  const [menuActive, setMenuActive] = useState(false)
  const [flag, setFlag] = useState('aside-default')

  const altenarMenu = ()=>{
    setFlag(prevFlag => (prevFlag === 'aside-default'? 'aside-mobile': 'aside-default'))
    setMenuActive(prevState => !prevState)
  }


  return (
    <>
      <div id="page-content">
        <aside  className={`${flag} ${menuActive ? 'active': ''}`}>
          <div className="container-aside-actions">

            <div className="action-user">
              <Link to="/Dashboard/User" >
                <img src={user} alt="" className="actions"/>
              </Link>
            </div>

            <div className="actions-aside">
              <div>
                <Link to="/Dashboard" >
                  <img src={home} alt="" className="actions"/>
                </Link>
              </div>
              <div>
                <Link to="/Dashboard/Livros" >
                  <img src={books} alt="" className="actions"/>
                </Link>
              </div>
              <div>
                <Link to="/Dashboard/Biblioteca" >
                  <img src={book} alt=""className="actions" />
                </Link>
              </div>
              <div>
                <Link to="/Dashboard/Atividades" >
                  <img src={todo} alt="" className="actions"/>
                </Link>
              </div>
              <div>
                <Link to="/Dashboard/Config" >
                  <img src={setting} alt="" className="actions"/>
                </Link>
              </div>
            </div>
            <div className="action-quit">
              <img src={door} alt="" className="actions"/>
            </div>
          </div>
        </aside>

        <div id="content">
          <header id="dashboard-header">
        
              <button className="menu-btn" onClick={altenarMenu}>
                <img src={menu} alt="" />
              </button>
              <div className="logo">
                <img src={logo} alt="" />
              
            </div>
            <Search btn_color={"#009688"} />
            <div className="container-actions">
              <a href="#">
                <img src={addBook} alt="" />
              </a>
              <button>
                <img src={notification} alt="" />
              </button>
            </div>
          </header>
          <main id="dashboard-main">
            <Outlet context={{ adm: "Wesley" }} />
          </main>
        </div>
      </div>
      {/* <CreateLivro/> */}
    </>
  );
}
