const db = require('../model/db_config');

module.exports.dbAuth = function(username, password, cb) {
    db.connect((err) => {
            let val = false;
            console.log("username :", username);
            console.log("password :", password);
            let sql = "SELECT * FROM table_user WHERE name='" + username + "' and password='" + password + "'";
            db.query(sql, function(err, results) {
                if (results.length > 0) {
                    if ((results[0].name == username) && (results[0].password == password)) {
                        console.log("user exist !");
                        cb(true);
                    } else {
                        console.log("user not found !");
                        cb(false);
                    }
                } else {
                    console.log("user not found !");
                    cb(false);
                }
            });
        })
        // next();
}

module.exports.isTokenAuthorized = function(req, res, next) {

}