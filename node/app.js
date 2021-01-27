let app = require('./config/server');
const rotas = require('./app/routes/routes');

rotas.rotaUsuarioSalvar(app);
rotas.rotaListarUsuarios(app);
rotas.rotaListarPosts(app);
rotas.rotaPostSalvar(app);
rotas.rotaListarPostsPorIdUsuario(app);