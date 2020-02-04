# nodejs-login-JWT
aplikasi untuk authentifikasi login form menggunakan Json Web Token

- packages npm
   - `npm install express`
   - `npm install jsonwebtoken`
   - `npm install nodemon --save`
   - `npm install dotenv`
   - `npm install ejs`
   - `npm install mysql`
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
    - `openssl genrsa -out private.pem 2048`
    - `openssl rsa -in private.pem -pubout -out public.pem`

- jalankan project : `npm start`

- menggunakan konsep MVC [Model View Controller], buat directory sebagai berikut :
    - controller --> `untuk controller, pengatur antara model dan views`
    - routes --> `routing setiap path`
        - login home --> `method GET, path /` 
        - login auth --> `method POST, path /login` --> true ? `/admin-pages`
        - admin-pages --> `method GET, path /admin-pages/data`
        - admin-pages --> `method GET, path /admin-pages/edit`
        - admin-pages --> `method GET, path /admin-pages/support`
        - logout --> `method GET, path /`

    - model --> `load model database`
    - views --> `tampilan pada user, form login dan pages admin`

- membuat databases :
    - `mysql -u root -p`
    - set password dan user mysql : `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'` : user : root, pass : password
    - `create database login_jwt;`
    - `USE login_jwt;`
    - `CREATE TABLE table_user ( id smallint unsigned not null auto_increment, name varchar(20) not null, password varchar(20) not null, constraint pk_example primary key (id) );`
    - `INSERT INTO table_user ( id, name, password) VALUES ( null, 'tobil', '123acbd' );`
- 