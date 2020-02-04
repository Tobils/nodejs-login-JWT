const jwtExpireSeconds = 300;

exports.getLogin = (req, res, next) => {
    res.render('login', {
        pageTitle: "Login",
        contentTitle: "Selamat Datang"
    });
}


exports.postLogin = (req, res, next) => {
    const token = req.token;
    res.cookie('token', token, { httpOnly: true, maxAge: jwtExpireSeconds * 1000 });
    res.render('admin-pages-data', {
        pageTitle: "Data",
        userName: req.username,
        hover: true
    });
}


exports.getData = (req, res, next) => {
    res.render('admin-pages-data', {
        pageTitle: "Data",
        userName: req.username,
        hover: true
    });
}


exports.getEdit = (req, res, next) => {
    res.render('admin-pages-edit', {
        pageTitle: "Edit",
        userName: req.username,
        hover: true
    });
}


exports.getSupport = (req, res, next) => {
    res.render('admin-pages-support', {
        pageTitle: "Support",
        userName: req.username,
        hover: true
    });
}