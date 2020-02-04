const path = require('../util/path');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const dotenv = require('dotenv').config();
const jwtExpireSeconds = 300;


exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: "Login",
        contentTitle: "Selamat Datang"
    });
}


exports.postLogin = (req, res, next) => {
    let privateKEY = fs.readFileSync(process.env.private_key, 'utf-8');
    let token = jwt.sign({ "body": "stuff" }, privateKEY, {
        algorithm: "HS256",
        expiresIn: jwtExpireSeconds
    });
    // res.send(token);
    res.render('admin-pages');
}