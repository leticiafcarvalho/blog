let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, function(){
    console.log('Servidor rodando com express na porta', port);
});

module.exports = app;