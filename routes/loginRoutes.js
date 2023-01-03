const express = require('express');

const LoginController = require('../controllers/LoginController');
const ValidationController = require('../controllers/ValidationController.js');


const Router = express.Router();


// /login/ +
Router.get('/', LoginController.getLogin);
Router.get('/register', LoginController.getRegister);

Router.post('/', LoginController.login);
Router.post('/register', ValidationController.validateRegister, LoginController.register);

Router.get('/logout', LoginController.logout);

module.exports = Router;