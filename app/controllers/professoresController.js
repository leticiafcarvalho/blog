const dbConnection = require('../../config/dbConnection');
const professoresModel = require('../models/professoresModel');

module.exports.professoresListar = function (app, req, res) {
    let connection = dbConnection();

    professoresModel.getProfessores(connection, function (err, result) {
        if (!err) {
            console.log(result);
            res.render('professores', { professores: result });
        } else {
            console.log("Erro: ", err);
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";
            res.send(pagina);
        }
    });
}

module.exports.professorSalvar = function (app, req, res, errors) {
    let professor = req.body;

    if(!errors.isEmpty()){
        let erros = errors.array();
        res.render('./admin/insereProfessor', {professor: professor, erros: erros});
        return;
    }

    const connection = dbConnection();

    professoresModel.setProfessores(professor, connection, function (err, result) {
        if (!err) {
            res.redirect('/professores');
        } else {
            console.log("Erro: ", err);
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";
            res.send(pagina);
        }
    });
}