const router = require('express').Router();
const bidController = require('../controllers/bidControllers');
const User = require('../models/user');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Send bid request with form information
router.post('/', bidController.postBid);

module.exports = router;