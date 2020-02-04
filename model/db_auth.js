const db = require('../model/db_config');

module.exports.dbAuth = function(username, password, cb) {
    db.connect((err) => {
            let val = false;
            console.log(username);
            console.log(password);
            let sql = "SELECT * FROM table_user WHERE name='" + username + "' and password='" + password + "'";
            db.query(sql, function(err, results) {
                if ((results[0].name == username) && (results[0].password == password)) {
                    cb(true);
                } else {
                    cb(false);
                }
            });
        })
        // next();
}

module.exports.isTokenAuthorized = function(req, res, next) {

}