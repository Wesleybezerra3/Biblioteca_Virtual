import React, { useEffect, useState } from "react";
import "./style.css";

export default function Pagination({ pages }) {
  const [arrPage, setArrPage] = useState([]);

  const [pagesV, setPagesV] = useState();

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
                <input type="button" value={page} className="btn-pages" />
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
