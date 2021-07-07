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

// // Get all items
// router.get('/', itemController.getItems);

exports.getItems = async function(req, res, next) {

    try {
        let data = await Item.find({})
        return res.json(data);

    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get one item
// router.get(`/:id`, itemController.getItemDescription)

exports.getItemDescription = async function(req, res, next) {

    try {
        let data = await Item.findById(req.params.id)
        return res.json(data);
        
    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get all items, sort by???

// Create new Item
// router.post('/', itemController.postItem)
exports.postItem = async function(req, res, next) {
    let item = new Item(
        {
            LotNum: req.body.LotNum,
            Title: req.body.Title,
            Description: req.body.Description,
            Condition: req.body.Condition,
            LowEst: req.body.LowEst,
            HighEst: req.body.HighEst,
            StartPrice: req.body.StartPrice,
            Artist: req.body.Artist,
            Category: req.body.Category
        }
    );
    try {
        item.save();
        res.json('Item saved')
    } catch (error) {
        return next(error);
    }
}

// Update an Item

// Delete an Item