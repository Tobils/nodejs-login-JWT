const db = require('../model/db_config');
const db_auth = require('../model/db_auth');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const dotenv = require('dotenv').config();
const jwtExpireSeconds = 300; // 300 detik masa berlaku token, ketika sudah habis... maka akan diminta login lg atau diminta refresh token


module.exports.isUserAuthorized = function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    var profile = {
        username: username,
        password: password
    }
    db_auth.dbAuth(username, password, (cb) => {
        if (cb) {
            let privateKEY = fs.readFileSync(process.env.private_key, 'utf-8');
            let token = jwt.sign({ username }, privateKEY, {
                algorithm: "RS256",
                expiresIn: jwtExpireSeconds
            });

            req.username = profile.username;
            req.token = token;
            return next();
        } else {
            return res.render('login', {
                pageTitle: "Login",
                contentTitle: "Username atau Password Salah !"
            });
        }
    });
}

module.exports.isTokenAuthorized = function(req, res, next) {
    const token = req.cookies['token'];
    /**
     * if cookies still exist let continue, if not please re-login
     */
    if (typeof token !== 'undefined') {
        console.log('token : ', token)
        console.log("request path : ", req.originalUrl)
        if (!token) {
            return res.status(401).end()
        }
        var payload;
        try {
            let publicKEY = fs.readFileSync(process.env.public_key, 'utf-8');
            payload = jwt.verify(token, publicKEY, { algorithm: "RS256" });
            console.log("username payload : ", payload);
            req.username = payload.username;
            return next();
        } catch (e) {
            if (e instanceof jwt.JsonWebTokenError) {
                // if the error thrown is because the JWT is unauthorized, return a 401 error or return to login page again
                // return res.status(401).end()
                return res.render('login', {
                    pageTitle: "Login",
                    contentTitle: "Username atau Password Salah !"
                });
            }
            // otherwise, return a bad request error or return to login page again
            // return res.status(400).end()
            return res.render('login', {
                pageTitle: "Login",
                contentTitle: "Username atau Password Salah !"
            });
        }
    } else {
        /**
         * bagaimaana agar tidak perlu login setiap cookies habis, tp cukup cek token nya sajah
         */
        return res.render('login', {
            pageTitle: "Login",
            contentTitle: "Username atau Password Salah !"
        });
    }
}


module.exports.isLogOut = (req, res, next) => {
    var token = req.cookies['token'];
    if (!token) {
        req.token = token;
    }
    next();
}