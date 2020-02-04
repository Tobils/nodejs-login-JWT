const express = require('express');
const router = express.Router();
const controller = require('../controller/user-controller');
const auth = require('../controller/auth');

router.get('/', controller.getLogin);
router.post('/login', auth.isUserAuthorized, controller.postLogin);

module.exports = router;