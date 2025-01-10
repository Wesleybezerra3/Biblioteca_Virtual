const {Sequelize, DataTypes} = require('sequelize');
const database = require('../config/db');

const livro = database.define("livros", {
    id_livro: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    autor: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    editora: {
      type: DataTypes.STRING(100),
    },
    ano_de_publicacao: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    caminho_livro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capa: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
      timestamps: false
  }
  
  );

module.exports = livro