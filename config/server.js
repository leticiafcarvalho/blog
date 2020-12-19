const express = require('express');
let app = express();
let port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './app/views')
app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, function(){
    console.log('Servidor rodando com o express na porta', port);
})

module.exports = app;