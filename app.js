const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const router = require('./routes/user-routes');
const path = require('path');
const rootDir = require('./util/path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set('views', 'views');
app.set('view engine', 'ejs');

app.use(router);
app.use((req, res, next) => {
    res.json({ "Error": "page not found" });
});

app.listen(process.env.PORT || 3030, () => {
    console.log(`app runnnig on port ${process.env.PORT}`);
});