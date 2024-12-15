import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../index.css'

import  Home  from "./routes/Home/Home.jsx";
import  CreateLivro  from './routes/CreateLivros.jsx';
import UpdateLivros from "./routes/UpdateLivros.jsx";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateLivro/>}/>
          <Route path="/update" element={<UpdateLivros/>}/>
          <Route path="*" element={<h1>Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
