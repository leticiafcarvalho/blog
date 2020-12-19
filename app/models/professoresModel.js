module.exports = {
    getProfessores: function(connection, callback){
        let sql = 'select * from professores';
        connection.query(sql, callback);
    },
    setProfessores: function (professor, connection, callback) {
        let sql = 'insert into professores set ?';
        connection.query(sql, professor, callback);
    }
}