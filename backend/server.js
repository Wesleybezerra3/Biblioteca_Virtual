const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors()); //Permitir requisições de origens diferentes (CORS)
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca",
});

db.connect((err) => {
  if (err) {
    console.error("Error ao conectar ao banco de dados", err);
  } else {
    console.log("Conectado ao banco de dados.");
  }
});

app.get("/livros", (req, res) => { //Rota para Exibir os livros no front-end.
  const query = "SELECT * FROM livros"; // Armazenamento do comando do sql para exibir os livros cadastrados.

  db.query(query, (err, result) => { //Função para solicitar as livros do banco de dados.
    if (err) {
      res.status(500).send("Erro ao buscar os livros.");
    } else {
      res.json(result); //Retorna os livros no formato JSON.
    }
  });
});

app.post("/livros", (req, res) => {
  const { titulo, autor, editora, ano_de_publicacao, genero, disponibilidade } =
    req.body;

  const query = `INSERT INTO livros (titulo, autor, editora, ano_de_publicacao, genero, disponibilidade) VALUES(?,?,?,?,?,?)`;

  const values = [
    titulo,
    autor,
    editora,
    ano_de_publicacao,
    genero,
    disponibilidade,
  ];

  db.query(query, values, (err, result) => {
    if (err) {
      console.log(err("Erro ao inserir livro:", err));
      res.status(500).send("Erro ao inserir o livro no banco.");
    } else {
      res.status(201).send("Livro adicionado com sucesso!");
    }
  });
});
//iniciar o servidor
app.listen(port);
