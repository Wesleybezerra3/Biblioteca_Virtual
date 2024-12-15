const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "biblioteca",
});
db.connect((err)=>{
    if(err){
        console.error('Erro ao conectar ao banco:', err)
        process.exit(1)
    }else{
        console.log('Banco de dados conectado.')
    }
});

module.exports = db;
