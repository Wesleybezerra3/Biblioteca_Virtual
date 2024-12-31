const { where, Op } = require("sequelize");
const livrosModel = require("../model/livros");

exports.getLivros = async (req, res) => {
  try {
    const { autor, genero } = req.query;
    let whereClause = {};

    if (genero) {
      whereClause.genero = genero;
    }

    if (autor) {
      whereClause.autor = autor;
    }
    const livros = await livrosModel.findAll({
      where: whereClause,
    });

    const livrosData = livros.map((livro) => livro.get({ plain: true }));
    return res.status(200).json(livrosData);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar livros!" });
  }
};

exports.searchLivro = async (req, res) => {
  try {
    const { titulo } = req.query;
    let livros;

    if (!titulo) {
      livros = await livrosModel.findAll();
    }

    livros = await livrosModel.findAll({
      where: {
        titulo: {
          [Op.like]: `%${titulo}%`,
        },
      },
    });

    if (livros.length === 0) {
      return res.status(400).json({ mensage: "Nenhum livro encontrado!" });
    }
    const livrosData = livros.map((livro) => livro.get({ plain: true }));
    return res.status(200).json(livrosData);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Erro ao buscar livros!" });
  }
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
    console.error(err);
    return res.status(500).json({ error: "Erro ao adicionar livro" });
  }
};

// exports.deleteLivro = (req, res) => {
//   const id = req.body.id;

//   livrosModel.delete(id, (err, result) => {
//     if (err) {
//       res.status(500).json({ error: "Erro ao deletar livro" });
//     }
//     if (result.affectedRows === 0) {
//       res.status(404).json({ error: "Livro não encontrado!" });
//     }

//     res.status(200).send("Livro removido com sucesso!");
//   });
// };
