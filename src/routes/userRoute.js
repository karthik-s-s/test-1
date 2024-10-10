const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/authMiddleware');
let {
  login,
  register,
  chatImport,
  filter,
} = require('../controller/userController');

router.post('/register', (req, res) => {
  register(req, res);
});

router.post('/login', (req, res) => {
  login(req, res);
});

router.post('/processChat', verifyToken, chatImport);

router.get('/filter', verifyToken, filter);
