import mysql from 'mysql'

export function db_mysql(query) {
    const me = this;
    let data;
    const promise = new Promise(function (resolve, reject) {
        const conn = mysql.createConnection({
            host: '118.126.109.20',
            user: 'bryant',
            password: 'leekobe24',
            database: 'wechat',
            multipleStatements: true
        });

        conn.connect();
        conn.query(query, function (err, result) {
            if (err) throw err;
            resolve(result);
            conn.end();
        });
    });

    promise.then(function (value) {
        // success
        return value;
    }, function (value) {
        // fail
    });
    return promise;
}