const router = require('express').Router();
const artistController = require('../controllers/artistControllers');
const User = require('../models/user');
const async = require('async');
const bcrypt = require('bcryptjs');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

// Get all artists
router.get('/', artistController.getArtists);

// Get one artist
router.get('/:id', artistController.getArtistDescription)

// Get all artists, sort by???

// Create new Artist

// Update an Artist

// Delete an Artist

module.exports = router;