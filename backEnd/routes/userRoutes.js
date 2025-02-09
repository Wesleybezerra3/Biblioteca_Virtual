const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/auth.js');

router.post('/register',userControllers.register)
router.post('/login',userControllers.login)
router.get('/users',userControllers.users)

module.exports = router;