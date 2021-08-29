const express = require('express');
const controleCadastro = require('./controllers/CandidateController');
const controleCadastro = require('./controllers/controleCadastro');
const routes = new express.Router();

routes.post('/register', controleCadastro.register);
routes.get('/', (req, res) => {
    res.send('cadastro');
});
module.exports = routes;
