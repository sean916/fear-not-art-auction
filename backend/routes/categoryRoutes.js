const router = require('express').Router();
const categoryController = require('../controllers/categoryControllers');
const User = require('../models/user');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Get all categorys
router.get('/', categoryController.getCategories);

// Get one category
router.get('/:id', categoryController.getCategoryDescription)

// Get all categorys, sort by???

// Create new Category

// Update an Category

// Delete an Category

module.exports = router;