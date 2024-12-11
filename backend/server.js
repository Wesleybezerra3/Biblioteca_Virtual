const express = require("express");
const mysql = require("mysql");
const cors = require("cors");


const app = express();
const port = 5000;
app.use(express.json());

app.use(cors()); //Permitir requisições de origens diferentes (CORS)

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados", err);
  } else {
    console.log("Conectado ao banco de dados.");
  }
});

app.get("/livros", (req, res) => {
 
  db.query("SELECT * FROM livros", (err, result) => {
    //Função para solicitar os livros no banco de dados.
    if (err) {
      res.status(500).send("Erro ao buscar livros.");
    } else {
      res.json(result); //Retorna os livros no formato JSON.
    }
  });
});

app.post("/livros/add", (req, res) => {
  //Cadastrar livro no banco de dados.
  const {
    titulo,
    autor,
    editora,
    ano_de_publicacao,
    genero,
    disponibilidade,
    caminho_livro,
  } = req.body;

  const query = `INSERT INTO livros (titulo, autor, editora, ano_de_publicacao, genero, disponibilidade, caminho_livro) VALUES(?,?,?,?,?,?,?)`;

  const values = [
    titulo,
    autor,
    editora,
    ano_de_publicacao,
    genero,
    disponibilidade,
    caminho_livro,
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

app.delete("/livros/delete", (req, res) => {
  const id_livro = req.body.id;
  console.log('ID do livro a ser deletado:' , id_livro)

  db.query("DELETE FROM livros WHERE id_livro = ?",id_livro,(err, result) => {

      if (err) {
        console.log("Erro ao deletar livro:", err);
        return res.status(500).send("Erro ao deleta livro!");
      }
          
      console.log("Resultado", result);

      if (result.affectedRows === 0) {
        return res.status(404).send("Livro não encontrado!");
      }

      res.status(200).send("Livro removido com sucesso!");
    }
  );
});

//iniciar o servidor
app.listen(port);
