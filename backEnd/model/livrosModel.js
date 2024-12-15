const db = require('../config/db');

exports.getAll = (genero,callback) =>{
  let query;
  let params = [];
  if(genero){
    query =  `SELECT * FROM livros WHERE genero = ?`
    params = [genero];
  }else{
    query = `SELECT * FROM livros`;
  }

  console.log("Query executada:", query, "Parâmetros:", params);
  
  db.query(query, params, (err,result) =>{
    callback(err, result)
  });
};

exports.create = (novoLivro, callback) =>{
    const query = `INSERT INTO livros (titulo, autor, editora, ano_de_publicacao, genero,caminho_livro, capa) VALUES(?,?,?,?,?,?,?)`
    db.query(query, novoLivro,(err,result)=>{
        callback(err, result)
    })
}

exports.delete = (id, callback) =>{
  const query = 'DELETE FROM livros WHERE id_livro = ?'
  db.query(query, id, (err, result)=>{
    callback(err, result)
  })
}