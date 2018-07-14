var express = require('express');
var authUtil = require('../services/authUtil');
var Users = require('../models/users');
var bcrypt = require('bcryptjs');

var router = express.Router();

router
  .get('/', function(req, res) {
    res.render('register', { csrfToken: req.csrfToken() });
  })

  .post('/', function(req, res) {

    var salt = bcrypt.genSaltSync(12);
    var hash = bcrypt.hashSync(req.body.password, salt);

    var user = {
      username:   req.body.username,
      userdata:   {firstname:  req.body.firstname, lastname:   req.body.lastname},
      email:      req.body.email,
      password:   hash
    };

    console.log(user.userdata.firstname);
    console.log("llllllllllllllllllllllllllllllllllllllllllllllllll");

    Users.createUser(user,function(err,result) {
      if (err) {
        var error = 'Something bad happened! Please try again';

        if (err.code === 11000) {
          error = 'That email is already taken, please try another';
        }

        res.render('register', {error:error, csrfToken: req.csrfToken() });
      } else {
        res.redirect('/home');
      }
    })

  });

module.exports = router;
