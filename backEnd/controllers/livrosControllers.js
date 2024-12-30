const { where } = require("sequelize");
const livrosModel = require("../model/livros");

exports.getLivros = async (req, res) => {
  try {
    const genero = req.query.genero;
    let whereClause = {};
    if (genero && genero !== "Tudo") {
      whereClause.genero = genero;
    }
    const livros = await livrosModel.findAll({
      where: whereClause,
    });

    const livrosData = livros.map((livro) => livro.get({ plain: true }));
    return res.status(200).json(livrosData);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

exports.searchLivro = (req, res) => {
  const titulo = req.query.titulo;
  return livrosModel.searchLivro(titulo, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao pesquisar livros!" });
    } else {
      return res.status(200).json(result);
    }
  });
};

exports.createLivro = async (req, res) => {
  try {
    const {
      titulo,
      autor,
      editora,
      ano_de_publicacao,
      genero,
      caminho_livro,
      capa,
    } = req.body;

    const novoLivro = await livrosModel.create({
      titulo,
      autor,
      editora,
      ano_de_publicacao,
      genero,
      caminho_livro,
      capa,
    });
    return res.status(201).json(novoLivro);
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "Erro ao adicionar livro" });
  }
};

exports.deleteLivro = (req, res) => {
  const id = req.body.id;

  livrosModel.delete(id, (err, result) => {
    if (err) {
      res.status(500).json({ error: "Erro ao deletar livro" });
    }
    if (result.affectedRows === 0) {
      res.status(404).json({ error: "Livro não encontrado!" });
    }

    res.status(200).send("Livro removido com sucesso!");
  });
};
