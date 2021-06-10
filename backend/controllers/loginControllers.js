const User = require('../models/user');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

exports.postLogin = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.json('No user found'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json(user);
      });
    })(req, res, next);
  };