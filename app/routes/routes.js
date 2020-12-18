let app = require('./config/server');
const rotas = require('./app/routes/routes');

rotas.rotahome(app);
rotas.rotaposts(app);
rotas.rotacriarusuario(app);