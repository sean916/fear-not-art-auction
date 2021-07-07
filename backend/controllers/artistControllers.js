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

// // Get all Artists
// router.get('/', artistController.getArtists);

exports.getArtists = async function(req, res, next) {

    try {
        let data = await Artist.find({})
        .then(res.json(data));

    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get one Artist
// router.get(`/:id`, artistController.getArtistDescription)

exports.getArtistDescription = async function(req, res, next) {

    try {
        let data = await Artist.findById(req.prams.id)
        .then(res.json(data));
        
    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get all Artists, sort by???

// Create new Item

// Update an Item

// Delete an Item