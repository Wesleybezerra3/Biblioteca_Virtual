import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";

import DashboardHome from "./routes/Dashboard/DashboardHome/Home.jsx";
import Home from "./routes/Home/Home.jsx";
import DashboardLayout from "./routes/Dashboard/DashboardLayout/Dashboard.jsx";

import UpdateLivros from "./routes/UpdateLivros.jsx";
import Biblioteca from "./routes/Dashboard/Biblioteca/Biblioteca.jsx";
import Atividades from "./routes/Dashboard/Atividades/Atividades.jsx";
import Livros from "./routes/Dashboard/Livros/Livros.jsx";
import Configuracoes from "./routes/Dashboard/Configuracoes/Configuracoes.jsx";
import Login from "./routes/Login";
import Register from "./routes/Register/index.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="/dashboard/Livros" element={<Livros />} />
            <Route path="/dashboard/Biblioteca" element={<Biblioteca />} />
            <Route path="/dashboard/Atividades" element={<Atividades />} />
            <Route path="/dashboard/Config" element={<Configuracoes />} />
          </Route>

          <Route path="/update" element={<UpdateLivros />} />
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
