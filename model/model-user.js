const db_auth = require('./db_auth');

class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    auth_login(cb) {
        db_auth.auth(this.username, this.password, cb);
    }

}

module.exports = {
    Login
}