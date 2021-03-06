const router = require('express').Router();
const itemController = require('../controllers/itemControllers');
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

// Get all items
router.get('/', itemController.getItems);

// Get one item
router.get('/:id', itemController.getItemDescription)

// Get all items, sort by???

// Create new Item
router.post('/', itemController.postItem)

// Create many Items with file upload
router.post('/file', itemController.postManyItems)

// Update an Item
router.patch('/:id', itemController.patchItem)

// Delete an Item
router.delete('/:id', itemController.deleteItem)

module.exports = router;