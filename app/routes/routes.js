const usuariocontroller = require('../controllers/usuarioController');
const controllerposts  = require('../controllers/postController');
const {check, validationResult} = require("express-validator");

module.exports = {

    rotaHome: function (app) {
        app.get('/', function (req, res) {
            res.render('home');
        })
    },

    rotaListarUsuarios: function (app) {      
        app.get('/usuarios', function (req, res) {
            usuariocontroller.usuariosListar(app, req, res);
        })
    },

    rotaUsuario: function (app) {
        app.get('/usuario', function (req, res) {
            res.render('admin/salvarusuario', { usuario: {}, erros: {} });
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

    rotaPosts: function (app) {
        app.get('/post', function (req, res) {
            res.render('admin/salvarpost', { post: {}, erros: {} });
        })
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