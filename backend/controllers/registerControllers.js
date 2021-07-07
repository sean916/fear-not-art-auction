const User = require('../models/user');
const Item = require('../models/item');
const Artist = require('../models/artist');
const Category = require('../models/category');
const Bid = require('../models/bid');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

exports.postUser = async (req, res, next) => {

    // Check if email is already in use
    let userExist = await User.find({ 'email': req.body.email });
    if (userExist.length > 0) {
        return res.json('This email is already registered...')
    };

    let hashedPassword = '';
    const email = req.body.email;
    hashedPassword = await bcrypt.hash(req.body.password, 10);
    let newUser = new User({
        email: email,
        password: hashedPassword
    });
    try {
        newUser.save()
        .then(() => res.json('User added!'))
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error'});
    }
};
