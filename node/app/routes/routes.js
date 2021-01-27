const usuariocontroller = require('../controllers/usuarioController');
const controllerposts  = require('../controllers/postController');
const {check, validationResult} = require("express-validator");

module.exports = {

    rotaListarUsuarios: function (app) {      
        app.get('/usuarios', function (req, res) {
            usuariocontroller.usuariosListar(app, req, res);
        })
    },

    rotaUsuarioSalvar: function (app) {
        app.post('/usuario/salvar', [
            check('nome').isLength({min:1}).withMessage('O nome é obrigatório.'),
            check('email').isEmail().withMessage('O e-mail é obrigatório.'),
            check('datanascimento').isLength({min: 1}).withMessage('A data é obrigatoria.'),
            check('senha').isLength({min: 1}).withMessage('A senha é obrigatória.')
        ], function (req, res) {
            const errors = validationResult(req);
            usuariocontroller.usuariosSalvar(app, req, res, errors);
        });
    },

    rotaListarPosts: function (app) {
        app.get('/posts', function (req, res) {
            controllerposts.postsListar(app, req, res);
        });
    },

    rotaListarPostsPorIdUsuario: function (app) {
        app.get('/posts/:idUsuario', function (req, res) {
            controllerposts.postsListarPorIdUsuario(app, req, res, req.params.idUsuario);
        });
    },

    rotaPostSalvar: function (app) {
        app.post('/post/salvar', [
            check('titulo').isLength({min:1}).withMessage('É obrigatório o preenchimento do campo titulo.'),
            check('descricao').isLength({min: 1}).withMessage('É obrigatório o preenchimento do campodescrição.'),

        ], function (req, res) {
            const errors = validationResult(req, res);
                controllerposts.postsSalvar(app, req, res, errors);
        });
    }
}