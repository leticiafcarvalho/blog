const dbConnection = require('../../config/dbConnection');
const controllerEstudantes = require('../controllers/estudantesController');
const controllerprofessores = require('../controllers/professoresController');
const controllerconteudo = require('../controllers/conteudoController');
const {check, validationResult} = require("express-validator");

module.exports = {

    rotaHome: function (app) {
        app.get('/', function (req, res) {
            res.render('home');
        })
    },

    rotaEstudantes: function (app) {      
        app.get('/estudantes', function (req, res) {
            controllerEstudantes.estudantesListar(app, req, res);
        })
    },

    rotaProfessores: function (app) {
        app.get('/professores', function (req, res) {
            controllerprofessores.professoresListar(app, req, res);
        })
    },

    rotaConteudo: function (app) {
        app.get('/conteudo', function (req, res) {
            controllerconteudo.conteudoListar(app, req, res);
        })
    },

    rotaInsereEstudante: function (app) {
        app.get('/insereestudante', function (req, res) {
            res.render('admin/insereEstudante', { estudante: {}, erros: {} });
        })
    },

    rotaEstudanteSalvar: function (app) {
        app.post('/estudante/salvar', [
            check('nome').isLength({min:5}).withMessage('O nome deve ter no mínimo 5 caracteres.'),
            check('cidade').isLength({min: 3}).withMessage('Cidade deve ter no minimo 3 caracteres'),
            check('datanascimento').isLength({min: 1}).withMessage('Data é obrigatoria'),
            check('nota').isLength({min: 1}).withMessage('Nota é obrigatoria').isNumeric().withMessage('Nota deve ser numérico'),
        ], function (req, res) {
            const errors = validationResult(req);
            controllerEstudantes.estudantesSalvar(app, req, res, errors);
        });
    },

    rotaInsereProfessor: function (app) {
        app.get('/insereprofessor', function (req, res) {
            res.render('admin/insereProfessor', { professor: {}, erros: {} });
        })
    },

    rotaProfessorSalvar: function (app) {
        app.post('/professor/salvar', [
            check('nome').isLength({min: 1}).withMessage('Nome é obrigatorio'),
            check('titulacao').isLength({min: 1}).withMessage('Titulacao é obrigatorio')
        ], function (req, res) {
            const errors = validationResult(req);
            controllerprofessores.professorSalvar(app, req, res, errors);
        });
    },

    rotaInsereConteudo: function (app) {
        app.get('/insereconteudo', function (req, res) {
            res.render('admin/insereConteudo', { conteudo: {}, erros: {} });
        })
    },

    rotaConteudoSalvar: function (app) {
        app.post('/conteudo/salvar', [
            check('conteudo').isLength({min: 1}).withMessage('Conteudo é obrigatorio'),
            check('dataconteudo').isLength({min: 1}).withMessage('Data do conteudo é obrigatorio')
        ], function (req, res) {
            const errors = validationResult(req);
            controllerconteudo.conteudoSalvar(app, req, res, errors);
        });
    }
}