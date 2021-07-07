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

// // Get all Categories
// router.get('/', categoryController.getCategories);

exports.getCategories = async function(req, res, next) {

    try {
        let data = await Category.find({})
        .then(res.json(data));

    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get one item
// router.get(`/:id`, itemController.getItemDescription)

exports.getCategoryDescription = async function(req, res, next) {

    try {
        let data = await Category.findById(req.prams.id)
        .then(res.json(data));
        
    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get all Categories, sort by???

// View Cateogries

// View a Cateogry

// Create new Cateogry

// Update an Cateogry

// Delete an Cateogry