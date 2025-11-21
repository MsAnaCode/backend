const express = require('express');
const router = express.Router();
const usuariosController = require('../Controllers/usuarioController');
const { verificarToken } = require('../Middlewares/authMiddleware');

router.post('/', usuariosController.criar);
router.post('/login', usuariosController.entrar);
router.post('/renovar', verificarToken, usuariosController.renovar);
router.delete('/:id', verificarToken, usuariosController.remover); // Ajuste: Rota deve receber ID

module.exports = router;