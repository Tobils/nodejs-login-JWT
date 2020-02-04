var db = require("./db_config");


auth = (username, password, cb) => {
    db.connect((err) => {
        let val = false;
        let sql = "SELECT * FROM table_user WHERE name='" + username + "' and password='" + password + "'";
        db.query(sql, function(error, results, fields) {
            cb(results);
        });
    })
}

auth("tobil", "123acbd", (cb) => {
    console.log(cb);
});