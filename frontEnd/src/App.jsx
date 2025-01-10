import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";

import DashboardHome from "./routes/Dashboard/DashboardHome/Home.jsx";
import Home from "./routes/Home/Home.jsx";
import DashboardLayout from "./routes/Dashboard/DashboardLayout/Dashboard.jsx";

import UpdateLivros from "./routes/UpdateLivros.jsx";
import Biblioteca from "./routes/Dashboard/Biblioteca/Biblioteca.jsx";
import Atividades from "./routes/Dashboard/Atividades/Atividades.jsx";
import Livros from "./routes/Livros/Livros.jsx";
import Configuracoes from "./routes/Dashboard/Configuracoes/Configuracoes.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="/Dashboard/Livros" element={<Livros />} />
            <Route path="/Dashboard/Biblioteca" element={<Biblioteca />} />
            <Route path="/Dashboard/Atividades" element={<Atividades />} />
            <Route path="/Dashboard/Config" element={<Configuracoes />} />
          </Route>

          <Route path="/update" element={<UpdateLivros />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
