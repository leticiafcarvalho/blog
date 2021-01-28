const dbConnection = require('../../config/dbConnection');	
const postsModel = require('../models/postModel');	

module.exports.postsListar = function (app, req, res) {	
    const connection = dbConnection();	
    
    postsModel.getposts(connection, function (err, results) {	

        if (!err) {	
            console.log(results);	
            res.send(results);	
        } else {	
            console.log("Erro:", err);	
            let pagina = "<h1>Erro encontrado</h1><h2>" + err + "</h2>";	
            res.send(pagina);	
        }	
    });	
}	

module.exports.postsSalvar = function (app, req, res, errors) {	
    let posts = req.body;	

    console.log(posts);	

    if(!errors.isEmpty()){	

        let erros = errors.array();	
        console.log(erros);	
        res.render('./posts', {post: posts, erros: erros});	
        return;	
    }	

    const connection = dbConnection();	

    postsModel.setposts(posts, connection, function (err, result) {	
        if (!err) {	
            res.redirect('/posts');	
        } else {	
            console.log("Erro: ", err);	
            let pagina = "<h1> Erro encontrado </h1> <h2>" + err + "</h2>";	
            res.send(pagina);	
        }	
    });	
}

module.exports.postsListarPorIdUsuario = function (app, req, res, idUsuario) {	
    const connection = dbConnection();	

    postsModel.getpostsporusuario(idUsuario, connection, function (err, results) {	

        if (!err) {	
            console.log(results);	
            res.send(results);	
        } else {	
            console.log("Erro:", err);	
            let pagina = "<h1>Erro encontrado</h1><h2>" + err + "</h2>";	
            res.send(pagina);	
        }	
    });	
}	

module.exports.postsExcluirPorId = function (app, req, res, idPost) {	
    const connection = dbConnection();	

    postsModel.deletePorId(idPost, connection, function (err, results) {	

        if (!err) {	
            console.log(results);	
            res.send(results);	
        } else {	
            console.log("Erro:", err);	
            let pagina = "<h1>Erro encontrado</h1><h2>" + err + "</h2>";	
            res.send(pagina);	
        }	
    });	
}