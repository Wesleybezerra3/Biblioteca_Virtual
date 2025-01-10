import React from "react";
import "./style.css";
import {Link,Outlet} from  'react-router-dom'
import Search from "../../../components/Search/Search";

import logo from "../../../assets/logo_green.svg";
import addBook from "../../../assets/addBook.svg";
import notification from "../../../assets/Notification.svg";
import books from '../../../assets/aside-icons/Books.svg'
import book from '../../../assets/aside-icons/book.svg'
import setting from '../../../assets/aside-icons/Settings.svg'
import home from '../../../assets/aside-icons/Home.svg'
import user from '../../../assets/aside-icons/User.svg'
import door from '../../../assets/aside-icons/Door.svg'
import todo from '../../../assets/aside-icons/Todo List.svg'




import CreateLivro from "../../CreateLivros";

export default function Dashboard() {
  return (
    <>
      <header>

        <div className="container-header">
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
        </div>
      </header>

      <aside>
        <div className="container-aside-actions">
          <div>
            <Link to='/Dashboard/User'>
            <img src={user} alt="" />
            </Link>
          </div>
        
        <div className="actions-aside">
          <div>
            <Link to='/Dashboard'>
            <img src={home} alt="" />
            </Link>
          </div>
          <div>
            <Link to='/Dashboard/Biblioteca'>
            <img src={books} alt="" />
            </Link>
          </div>
          <div>
            <Link to='/Dashboard/Livros'>
            <img src={book} alt="" />
            </Link>
          </div>
          <div>
            <Link to='/Dashboard/Atividades'>
            <img src={todo} alt="" />
            </Link>
          </div>
          <div>
           <Link to='/Dashboard/Config'>
           <img src={setting} alt="" />
           </Link> 
          </div>
        </div>

        <div>
          <img src={door} alt="" />
        </div>

        </div>
      </aside>
      <main>
        <Outlet context={{adm: 'Wesley'}}/>
      </main>
      {/* <CreateLivro/> */}
    </>
  );
}
