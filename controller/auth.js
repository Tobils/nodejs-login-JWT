const db = require('../model/db_config');
const db_auth = require('../model/db_auth');
module.exports.isUserAuthorized = function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    db_auth.dbAuth(username, password, (cb) => {
        if (cb) {
            return next();
        }
    });
}

module.exports.isTokenAuthorized = function(req, res, next) {

}