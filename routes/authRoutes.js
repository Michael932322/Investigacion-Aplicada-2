const express = require('express');
const router = express.Router();
const { register, login, protectedResource } = require('../controllers/authController');
const auth = require('../middleware/auth');

// Rutas
router.post('/register', register);
router.post('/login', login);
router.get('/protected', auth, protectedResource);

module.exports = router;
