let app = require('./config/server');
const rotas = require('./app/routes/routes');

rotas.rotaUsuario(app);
rotas.rotaUsuarioSalvar(app);
rotas.rotaListarUsuarios(app);