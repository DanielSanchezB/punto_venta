const express = require('express');
// const { route } = require('../../routes');
const LogInControlador = require('../controladores/LogInControlador');

const router = express.Router();

router.get('/login', LogInControlador.login)
router.post('/login', LogInControlador.autenticar)
router.get('/registrar', LogInControlador.registrar)
router.post('/registrar', LogInControlador.tiendaUsuario)
router.get('/logout', LogInControlador.logout)

module.exports = router;