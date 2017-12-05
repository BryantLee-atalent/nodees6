import mysql from 'mysql'

export class db_mysql {
    constructor() {
        this.dbConn = mysql.createConnection({
            host     : '118.126.109.20',
            user     : 'bryant',
            password : 'leekobe24',
            database: 'wechat'
        });
    }

    connStart() {
        this.dbConn.connect();
    }

    connExec(query) {
        const me = this;
        me.dbConn.query(query, function(err, rows, fields) {
            if (err) throw err;
            me.result = rows;
        });
    }

    connEnd() {
        this.dbConn.end();
    }
}