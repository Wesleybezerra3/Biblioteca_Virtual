import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState({
    nome: "",
    senha: "",
  });

  function getData(e) {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  }
  const login = async (e) => {
    e.preventDefault();
    for (let i in dataUser) {
      if (!dataUser[i]) {
        alert("Todos os campos precisam estar preenchidos.");
        return null;
      }
    }
    try {
      const response = await api.post("/auth/login", dataUser);
      const message = response.data.message;
      const token = response.data.token;
      localStorage.setItem('token',token);
      alert(message);
      navigate('/')
    } catch (error) {
      const response = error.response.data;
      alert(response.message)
      console.error(error)
    }
  };

  return (
    <>
      <main>
        <section>
          <div>
            <h1>Faça Login com sua conta</h1>
            <p>Bem Vindo Novamente</p>
          </div>
          <div>
            <form onSubmit={login}>
              <input
                type="text"
                id="user"
                name="nome"
                placeholder="E-mail"
                onChange={getData}
              />
              <input
                type="password"
                id="password"
                name="senha"
                placeholder="Senha"
                onChange={getData}
              />
              

              <button>Login</button>
            </form>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}
