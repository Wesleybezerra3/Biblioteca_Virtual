const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosControllers');

router.get('/', livrosController.getBooks);
router.get('/search', livrosController.searchBooks);

router.post('/', livrosController.createBooks);
// router.delete('/', livrosController.deleteLivro);
module.exports = router;