import React, { useEffect, useState,useContext } from "react";
import "./style.css";
import { PagesContext } from "../../context/MyContext";


export default function Pagination() {
  const pages = 3;
  const [arrPage, setArrPage] = useState([]);
  const {page,setPage} = useContext(PagesContext);

  const [pagesV, setPagesV] = useState();
  const pageNav = (page)=>{
    setPage(page);
  }

  const next = () => {};
  useEffect(() => {
    if (pages > 1) {
      for (let i = 1; i <= pages; i++) {
        setArrPage(arrPage.push(i));
      }
    }
    console.log(arrPage);
    setPagesV(arrPage);
  }, [pages]);
  return (
    <div className="container-pagination">
      <div>
        <button className="previous-btn btn-nav"></button>
      </div>
      <div>
        <ul className="list-pages">
          {pagesV && pagesV.length > 0 ? (
            pagesV.map((page) => (
              <li key={page} >
                <input type="button" value={page} className="btn-pages" onClick={()=>pageNav(page)} />
              </li>
            ))
          ) : (
            <input type="button" value="1" className="btn-pages" />
          )}
        </ul>
      </div>

      <div>
        <button className="next-btn btn-nav"></button>
      </div>
    </div>
  );
}
