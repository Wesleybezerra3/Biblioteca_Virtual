const livrosModel = require("../model/livrosModel");

exports.getLivros = (req, res) => {
  let genero = req.query.genero;
  if(genero){
    return livrosModel.getLivros(genero, (err, result) => {
      if (err) {
        return res.status(500).json({error:"Erro ao buscar livros"});
      } else {
       return res.status(200).json(result);
      }
    });
  }

  livrosModel.getLivros(null,(err, result) => {
    if (err) {
      return res.status(500).send("Erro ao buscar livros", err);
    } else {
     return res.status(200).json(result);
    }
  });
};

exports.createLivro = (req, res) => {
  const {
    titulo,
    autor,
    editora,
    ano_de_publicacao,
    genero,
    caminho_livro,
    capa
  } = req.body;

  const novoLivro = [
    titulo,
    autor,
    editora,
    ano_de_publicacao,
    genero,
    caminho_livro,
    capa
  ];
  livrosModel.create(novoLivro, (err, result) => {
    if (err) {
      return res.status(500).json({error:"Erro ao adicionar livro"});
    } else {
      return res.status(201).json(result);
    }
  });
};

exports.deleteLivro = (req, res) => {
  const id = req.body.id;

  livrosModel.delete(id, (err, result) => {
    if (err) {
      res.status(500).json({error: "Erro ao deletar livro"});
    }
    if (result.affectedRows === 0) {
      res.status(404).json({error: "Livro não encontrado!"});
    }

    res.status(200).send("Livro removido com sucesso!");
  });
};
