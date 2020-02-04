var db = require('./db_config');

db.connect(function(err) {
    if (err) throw err;
    console.log("connected");

    let sql = "CREATE DATABASE IF NOT EXISTS login_jwt DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;";
    db.query(sql, function(err, result) {
        if (err) throw err;
        console.log("database created")
    });
});