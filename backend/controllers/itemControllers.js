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
require('dotenv').config();
const axios = require('axios');
const cloudinary = require('../utils/cloudinary');

// // Get all items
// router.get('/', itemController.getItems);

exports.getItems = async function(req, res, next) {

    try {
        let data = await Item.find({}).populate('Artist').populate('Category');
        console.log(data);
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
        let data = await Item.findById(req.params.id).populate('Artist').populate('Category');
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

    // Check if item with that lot number exists?

    // Add photos from the backend to the API and return an array of URLS
    
    // Set imgURL to array of URLs


    // Filter imgArray for blank fields
    let filteredArray = req.body.imgFileStrArr.filter(function(value, index, arr) {
        return value !== ''
    });

    console.log('filtered array length is...')
    console.log(filteredArray.length);
    let imgURL = [];
    let url = `https://api.cloudinary.com/v1_1/fearnotartgallery/image/upload`
    for (let i = 0; i < filteredArray.length; i++) {
        let data = {
            "file": filteredArray[i],
            "upload_preset": 'tmgc8eox'
        }
        try {
            const uploadedResponse = await axios.post(url, data)
            console.log(uploadedResponse.data.url)
            imgURL.push(uploadedResponse.data.url);
        } catch (error) {
            console.error(error);
        }
    }

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
            Category: req.body.Category,
            imgURL: imgURL
        }
    );
    try {
        item.save()
        .then( () => res.json(`${item.Title} was added to the database.`))
    } catch (error) {
        return next(error);
    }
}

exports.postManyItems = async function(req, res, next) {
    
    try {
        Item.insertMany(req.body)
        .then( () => res.json('File uploaded successfully!'));
        
    } catch (error) {
        console.error('Error with data import')
        return res.json('File upload Failed')
    }
}

// Update an Item
exports.patchItem = async function(req, res, next) {

    // handle imgURL and imgFileStr
    let filteredArray = req.body.imgFileStrArr.filter(function(value, index, arr) {
        return value !== ''
    });

    console.log('filtered array length is...')
    console.log(filteredArray.length);
    let imgURL = [];
    let url = `https://api.cloudinary.com/v1_1/fearnotartgallery/image/upload`
    for (let i = 0; i < filteredArray.length; i++) {
        let data = {
            "file": filteredArray[i],
            "upload_preset": 'tmgc8eox'
        }
        try {
            const uploadedResponse = await axios.post(url, data)
            console.log(uploadedResponse.data.url)
            imgURL.push(uploadedResponse.data.url);
        } catch (error) {
            console.error(error);
        }
    }

    // filter req.body.imgURL
    let filteredURLArr = req.body.imgURL.filter(function(value, index, arr) {
        return value !== ''
    });
    for (let i = 0; i < filteredURLArr.length; i++) {
        imgURL.push(filteredURLArr[i]);
    }


    let item = new Item(
        {
            LotNum: req.body.LotNum,
            Title: req.body.Title,
            Description: req.body.Description,
            Condition: req.body.Condition,
            LowEst: req.body.LowEst,
            HighEst: req.body.HighEst,
            StartPrice: req.body.StartPrice,
            Category: req.body.Category,
            Artist: req.body.Artist,
            imgURL: imgURL,
            _id: req.params.id
        }
    );
    try {
        Item.findByIdAndUpdate(req.params.id, item)
        .then( () => res.json('Item Updated Successfully. Refresh your browser to see the changes.'))

    } catch (error) {
        console.log(error);
        res.json(error);
    }
    
}

// Delete an Item
exports.deleteItem = async function(req, res, next) {
    try {
        Item.findByIdAndDelete(req.params.id)
        .then( () => res.json('This item was deleted successfully. Use the Nav Bar at the top of the page to view more items.'))
    } catch (error) {
        console.error(`Error with deleting item: ${req.params.id}`)
        return res.json('Item Delete Failed')
    }

}