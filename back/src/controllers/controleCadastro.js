const Cadastro = require('../models/Cadastro');


module.exports = {
    async register(req, res) {

        const { email, gender, name, cep } = req.body;

        const newCadastro = new Cadastro();

        newCadastro.email = email;
        newCadastro.name = name;
        newCadastro.gender = gender;
        newCadastro.cep = cep;

        newCadastro.save((err, savedCadastro) => {
            if (err) {
                console.log(err);
                return res.status(500).send('iti malia deu probleminha!');
            }

            return res.status(200).send(savedCadastro);
        });
    },



};