module.exports = {	
    getposts: function(connection, callback){	
        let sql = 'select * from blog.post';	
        connection.query(sql, callback);	
    },	

    setposts: function(posts, connection, callback){	
        let sql = 'insert into blog.post set ?';	
        connection.query(sql, posts, callback);	
    },

    getpostsporusuario: function(idUsuario, connection, callback){
        let sql = 'select * from blog.post where idusuario = ?';
        connection.query(sql, idUsuario, callback);
    }

} 