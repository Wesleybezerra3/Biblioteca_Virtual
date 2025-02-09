import React, { useState } from "react";
import api from "../../services/api";
import {Navigate, useNavigate} from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState({
    nome: "",
    senha: "",
  });

  function getData(e) {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });
  }

  const register = async (e) => {
    e.preventDefault();
    for (let i in dataUser) {
      if (!dataUser[i]) {
        alert("Todos os campos precisam estar preenchidos.");
        return null;
      }
    }
    try {
      const response = await api.post("/auth/register", dataUser);
      const message = response.data.message;
      alert(message);
      navigate('/login')
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Este usuário já está cadastrado!");
      } else {
        alert("Erro ao cadastrar usuário. Tente novamente.");
      }
    }
  };

  return (
    <>
      <main>
        <section>
          <div>
            <h1>Crie sua conta</h1>
            <p>Seja bem-vindo!</p>
          </div>
          <div>
            <form onSubmit={register}>
              <input
                type="text"
                id="user"
                name="nome"
                placeholder="Nome de usuário"
                onChange={getData}
              />
              <input
                type="password"
                id="password"
                name="senha"
                placeholder="Senha"
                onChange={getData}
              />

              <button>Cadastrar-Se</button>
            </form>
          </div>
        </section>

        <section></section>
      </main>
    </>
  );
}
