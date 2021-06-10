const router = require('express').Router();
const registerController = require('../controllers/registerControllers')
const User = require('../models/user');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Post request for new user
router.post('/', registerController.postUser);

// Get request for new user

module.exports = router;