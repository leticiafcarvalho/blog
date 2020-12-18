const controllerposts = require('../controllers/postsController');
const controllerusuarios = require('../controllers/usuariosController')
const { check, validationResult } = require("express-validator");

module.exports = {
    rotahome: function (app) {
        app.get('/', function (req, res) {
            res.render('cadastroposts'), { posts: {}, erros: {} };
        });
    },

    rotaposts: function (app) {
        app.get('/posts', function (req, res) {
            controllerposts.postsListar(app, req, res);
        });
    },

    rotapostsalvar: function (app) {
        app.post('/salvar', [
            check('nome').isLength({min:1 , max:50}).withMessage('É obrigatório e não deve ultrapassar 50 caracteres.'),
            check('autor').isLength({min: 1, max:100}).withMessage('É obrigatório e não deve ultrapassar 100 caracteres.'),
            check('numpagina').isNumeric().withMessage('Campo numérico.')

        ], function (req, res) {
            const errors = validationResult(req, res);
                controllerposts.postsSalvar(app, req, res, errors);
        });
    },

    rotausuarios: function (app) {
        app.get('/usuarios', function (req, res) {
            controllerusuarios.usuariosListar(app, req, res);
        });
    },

    rotausuariossalvar: function (app) {
        app.post('/salvar', [
            check('nome').isLength({min:1 , max:50}).withMessage('É obrigatório e não deve ultrapassar 50 caracteres.'),
            check('email').isLength({min: 1, max:100}).withMessage('É obrigatório e não deve ultrapassar 100 caracteres.'),
            check('datanascimento').isLength({min: 1, max:100}).withMessage('É obrigatório e não deve ultrapassar 100 caracteres.'),
            check('senha').isNumeric().withMessage('Campo numérico.')

        ], function (req, res) {
            const errors = validationResult(req, res);
                controllerposts.postsSalvar(app, req, res, errors);
        });
    }
}