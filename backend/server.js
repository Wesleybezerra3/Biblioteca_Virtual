const express = require("express");
const cors = require("cors");
const livrosRoutes = require('./routes/livrosRoutes')


const app = express();
const port = 5000;
app.use(express.json());

app.use(cors()); //Permitir requisições de origens diferentes (CORS)


app.use('/livros', livrosRoutes);


app.listen(port);
