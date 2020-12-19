const dbConnection = require('../../config/dbConnection');
const conteudoModel = require('../models/conteudoModel');

module.exports.conteudoListar = function (app, req, res) {
    let connection = dbConnection();

    conteudoModel.getConteudo(connection, function (err, result) {
        if (!err) {
            console.log(result);
            res.render('conteudo', { conteudo: result });
        } else {
            console.log("Erro: ", err);
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";
            res.send(pagina);
        }
    });
}

module.exports.conteudoSalvar = function (app, req, res, errors) {
    let conteudo = req.body;

    if(!errors.isEmpty()){
        
        let erros = errors.array();
        res.render('./admin/insereConteudo', {conteudo: conteudo, erros: erros});
        return;
    }

    const connection = dbConnection();

    conteudoModel.setConteudo(conteudo, connection, function (err, result) {
        if (!err) {
            res.redirect('/conteudo');
        } else {
            console.log("Erro: ", err);
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";
            res.send(pagina);
        }
    });
}