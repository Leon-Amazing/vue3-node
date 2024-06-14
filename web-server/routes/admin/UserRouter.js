const express = require('express');
const UserController = require('../../controllers/admin/UserController');
const UserRouter = express.Router();

/* GET home page. */
UserRouter.post('/adminapi/user/login', UserController.login);

module.exports = UserRouter;
