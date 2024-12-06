import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import  LivrosList  from "./routes/Home.jsx";
import  CadastrarLivro  from "./routes/CadastrarLivro.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LivrosList />} />
          <Route path="/cadastrar_livro" element={<CadastrarLivro/>}/>
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
