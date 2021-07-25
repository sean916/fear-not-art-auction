const path = require('path');
require('dotenv').config({ path: require('find-config')('.env') })
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');

const session = require('express-session');
var passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const isDev = process.env.NODE_ENV !== 'production';

// Import Models
const User = require('./models/user');
const Item = require('./models/item');
const Bid = require('./models/bid');

const app = express();

app.use(cors({
    origin: 'https://quiet-thicket-87706.herokuapp.com/**', // Location of react app
    credentials: true
}));
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ limit: '50mb' }));

app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

// Connect to MongoDB database
connectDB();

// Passport JS and Session set up
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
},
  function(username, password, done) {
    console.log(username);
    console.log(password);
    User.findOne({ email: username }, function (err, user) {
      console.log(user);
      if (err) { return done(err); }

      if (!user) {
          return done(null, false, { message: "User with that email not found..." });
      }

      bcrypt.compare(password, user.password, function(err, match) {
          
          if (match) {
            // passwords match! log user in
            console.log(match);
            return done(null, user)
          } else {
            // passwords do not match!
            return done(null, false, { message: "Incorrect password" })
          }
        })
      });
    })
  );
  
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
  app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
  });

  // Set up routes
const loginRouter = require('./routes/loginRoutes');
const registerRouter = require('./routes/registerRoutes');
const itemRouter = require('./routes/itemRoutes');
const bidRouter = require('./routes/bidRoutes');
const artistRouter = require('./routes/artistRoutes');
const categoryRouter = require('./routes/categoryRoutes');

app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/item', itemRouter);
app.use('/api/bid', bidRouter);
app.use('/api/artist', artistRouter);
app.use('/api/category', categoryRouter);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`)})