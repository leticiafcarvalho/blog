const dbConnection = require('../../config/dbConnection');
const usuariosModel = require('../models/usuariosModel');

module.exports.usuariosListar = function (app, req, res) {
    const connection = dbConnection();
    const usuariosModel = require('../models/usuariosModel');
    usuariosModel.getusuarios(connection, function (err, results) {

        if (!err) {
            console.log(results);
            res.render('usuarios', { usuarios: results });
        } else {
            console.log("Erro:", err);
            let pagina = "<h1>Erro encontrado</h1><h2>" + err + "</h2>";
            res.send(pagina);
        }
        
    });
}

module.exports.usuariosSalvar = function (app, req, res, errors) {
    let usuarios = req.body;

    console.log(usuarios);

    if(!errors.isEmpty()){
        
        let erros = errors.array();
        console.log(erros);
        res.render('./cadastrousuarios', {usuarios: usuarios, erros: erros});
        return;
    }

    const connection = dbConnection();

    usuariosModel.setusuarios(usuarios, connection, function (err, result) {
        if (!err) {
            res.redirect('/usuarios');
        } else {
            console.log("Erro: ", err);
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";
            res.send(pagina);
        }
    });
}



