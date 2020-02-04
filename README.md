# nodejs-login-JWT
aplikasi untuk authentifikasi login form menggunakan Json Web Token

- packages npm
   - `npm install express`
   - `npm install jsonwebtoken`
   - `npm install nodemon --save`
   - `npm install dotenv`
- setting project : `npm init`
- edit package.json menjadi :
    ```json
    {
        "name": "nodejs-login-jwt",
        "version": "1.0.0",
        "description": "aplikasi login menggunakan auth JWT",
        "main": "app.js",
        "dependencies": {
            "dotenv": "^8.2.0",
            "express": "^4.17.1",
            "jsonwebtoken": "^8.5.1",
            "nodemon": "^2.0.2"
        },
        "devDependencies": {},
        "scripts": {
            "start": "nodemon app.js"
        },
        "repository": {
            "type": "git",
            "url": "git+https://github.com/Tobils/nodejs-login-JWT.git"
        },
        "author": "dv.suhada@gmail.com",
        "license": "ISC",
        "bugs": {
            "url": "https://github.com/Tobils/nodejs-login-JWT/issues"
        },
        "homepage": "https://github.com/Tobils/nodejs-login-JWT#readme"
    }
    ```
- generate privatkey.pem dan publickey.pem
- jalankan project : `npm start`
