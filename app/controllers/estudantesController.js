const dbConnection = require('../../config/dbConnection');
const estudantesModel = require('../models/estudantesModel');

module.exports.estudantesListar = function (app, req, res) {
    let connection = dbConnection();

    estudantesModel.getEstudantes(connection, function (err, result) {
        if (!err) {
            console.log(result);
            res.render('estudantes', { estudantes: result });
        } else {
            console.log("Erro: ", err);
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";
            res.send(pagina);
        }
    });
}

module.exports.estudantesSalvar = function (app, req, res, errors) {
    let estudante = req.body;

    console.log(estudante);

    if(!errors.isEmpty()){
        
        let erros = errors.array();
        res.render('./admin/insereEstudante', {estudante: estudante, erros: erros});
        return;
    }

    const connection = dbConnection();

    estudantesModel.setEstudante(estudante, connection, function (err, result) {
        if (!err) {
            res.redirect('/estudantes');
        } else {
            console.log("Erro: ", err);
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";
            res.send(pagina);
        }
    });
}