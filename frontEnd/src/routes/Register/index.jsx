import React, { useEffect, useState } from "react";
import api from "../../services/api";
import "./style.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo_green.svg";
import CardMessage from "../../components/card-message";

export default function Register() {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({
    nome: "",
    senha: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const [messageInfo, setMessageInfo] = useState({
    message: "",
    type: "",
  });
  const [error, setError] = useState({
    state: false,
    type: "",
  });

  function getData(e) {
    const { name, value } = e.target;
    setDataUser({ ...dataUser, [name]: value });

    if (error) {
      setError({ state: false, type: "" });
    }
  }

  const register = async (e) => {
    e.preventDefault();
    for (let i in dataUser) {
      if (!dataUser[i]) {
        setMessageInfo({
          message: "Os campos precisam estar preenchidos!",
          type: "error",
        });
        setError({ state: true, type: "inputs" });
        console.log(error)
        return;
      }
    }

    if (!confirmPassword) {
      setMessageInfo({
        message: "Os campos precisam estar preenchidos!",
        type: "error",
      });
      setError({ state: true, type: "inputs" });
      console.log(error)
      return;
    }
    if (dataUser.senha !== confirmPassword) {
      setMessageInfo({ message: "Senhas diferentes!", type: "error" });
      setError({ state: true, type: "confirm" });
      console.log(error)
      return;
    }
    
    try {
      const response = await api.post("/auth/register", dataUser);
      const message = response.data.message;
      alert(message);
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessageInfo({
          message: "Este usuário já está cadastrado!",
          type: "error",
        });
      } else {
        setMessageInfo({
          message: "Erro ao cadastrar usuário. Tente novamente.",
          type: "error",
        });
      }
    }
  };

  useEffect(() => {
      document.getElementById("name")?.focus();
  }, []);

  return (
    <>
      <main className="container-register">
        <section className="content-register">
          <div className="container-text-register">
            <div className="content-header-register">
              <div>
                <h1>Crie sua conta</h1>
                <p>Seja bem-vindo!</p>
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
          <div className="container-form-register">
            <form onSubmit={register}>
              <input
                type="text"
                id="name"
                name="nome"
                placeholder="Nome de usuário"
                onChange={getData}
                className={
                  error.state && error.type === "inputs" ? "input-error" : ""
                }
              />
              <input
                type="password"
                id="password"
                name="senha"
                placeholder="Senha"
                onChange={getData}
                className={
                  error.state && error.type === "inputs" ? "input-error" : ""
                }
              />
              <input
                type="password"
                id="confirm-password"
                name="senha"
                placeholder="Confirmar senha"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={
                  error.state &&
                  (error.type === "inputs" || error.type === "confirm")
                    ? "input-error"
                    : ""
                }
              />
              <button>Cadastrar-Se</button>
              <CardMessage
                message={messageInfo.message}
                type={messageInfo.type}
              />
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
