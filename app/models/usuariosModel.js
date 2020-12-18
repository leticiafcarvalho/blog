module.exports = {
    getusuario: function(connection, callback){
        let sql = 'select * from blog.usuario';
        connection.query(sql, callback);
    },

    setusuario: function(usuario, connection, callback){
        let sql = 'insert into blog.usuario set ?';
        connection.query(sql, usuario, callback);
    },

}