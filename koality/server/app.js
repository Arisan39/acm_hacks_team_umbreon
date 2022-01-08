const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const passport = require("passport");    
const bodyParser = require("body-parser");    
const User = require("./models/user.model");    
const LocalStrategy = require("passport-local"); 
const passportLocalMongoose   = require("passport-local-mongoose");

const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("express-session")({    
  secret:"Hello World, this is a session",    
  resave: false,    
  saveUninitialized: false
}));

//app routes
app.use('/users', usersRouter);

//tell express to use Passport for user session
app.use(passport.initialize());
app.use(passport.session());

//serialize and deserialize userID for persistent login session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
