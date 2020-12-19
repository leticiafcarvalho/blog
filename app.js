let app = require('./config/server');
const rotas = require('./app/routes/routes');

rotas.rotaUsuario(app);
rotas.rotaUsuarioSalvar(app);
rotas.rotaListarUsuarios(app);
rotas.rotaListarPosts(app);
rotas.rotaPosts(app);
rotas.rotaPostSalvar(app);