const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosControllers')

router.get('/', livrosController.getLivros);
router.post('/', livrosController.createLivro)
router.delete('/', livrosController.deleteLivro)


module.exports = router