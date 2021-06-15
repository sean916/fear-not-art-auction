const router = require('express').Router();
const itemController = require('../controllers/itemControllers');
const User = require('../models/user');
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


module.exports = router;