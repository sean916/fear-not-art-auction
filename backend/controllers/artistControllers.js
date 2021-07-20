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
        return (res.json(data));

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
        return res.json(data);
        
    } catch (error) {
        console.log(error);
        return res.error
    }
}

// // Get all Artists, sort by???

// Create new Item
exports.postArtist = async function(req, res, next) {

    // Check database for artist with this name
    let artistExist = await Artist.find({ "Name": req.body.Name });
    if (artistExist.length > 0) {
        return res.json(`${req.body.Name} is already in the database.`)
    }

    let thisArtist = new Artist({
        Name: req.body.Name
    });

    try {
        thisArtist.save()
        .then( () => res.json(`${req.body.Name} was added to the database.`))

    } catch (error) {
        console.log(error);
        return res.error
    }
}

// Update an Item
exports.patchArtist = async function(req, res, next) {
    
}

// Delete an Item
exports.deleteArtist = async function(req, res, next) {
    
}