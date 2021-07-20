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
        return res.json(data);

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
        return res.json(data);
        
    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get all Categories, sort by???

// View Cateogries

// View a Cateogry

// Create new Cateogry
exports.postCategory = async function (req, res, next) {

        // Check database for category with this name
        let categoryExist = await Category.find({ "Name": req.body.Name });
        if (categoryExist.length > 0) {
            return res.json(`${req.body.Name} is already in the database.`)
        }
    
        let thisCategory = new Category({
            Name: req.body.Name
        });
    
        try {
            thisCategory.save()
            .then( () => res.json(`${req.body.Name} was added to the database.`))
    
        } catch (error) {
            console.log(error);
            return res.error
        }
}

// Update an Cateogry
exports.patchCategory = async function(req, res, next) {

}

// Delete an Category
exports.deleteCategory = async function(req, res, next) {
    
}