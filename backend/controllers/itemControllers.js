const User = require('../models/user');
const Item = require('../models/item');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// // Get all items
// router.get('/', itemController.getItems);

exports.getItems = async function(req, res, next) {

    try {
        let data = await Item.find({})
        .then(res.json(data));

    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get one item
// router.get(`/:id`, itemController.getItemDescription)

exports.getItemDescription = async function(req, res, next) {

    try {
        let data = await Item.findById(req.prams.id)
        .then(res.json(data));
        
    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get all items, sort by???