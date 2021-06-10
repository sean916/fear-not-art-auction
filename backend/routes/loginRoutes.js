const router = require('express').Router();
const loginController = require('../controllers/loginControllers');
const User = require('../models/user');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Send login request with form information
router.post('/', loginController.postLogin);

module.exports = router;