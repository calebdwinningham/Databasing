var express = require('express');
var authUtil = require('../services/authUtil');
var Users = require('../models/users');
var bcrypt = require('bcryptjs');

var router = express.Router();

router
  .get('/', function(req,res) {
    Users.getAll(function(err,docs) {
      members = docs;
      res.render('login', {members: members, csrfToken: req.csrfToken() });
    });
  })

  .post('/', function(req, res) {
    Users.findByEmail(req.body.email, function (err, user) {
      if (!user) {
        res.render('login', { error: "Incorrect email", csrfToken: req.csrfToken() });
      } else {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          authUtil.createUserSession(req, res, user);
          res.redirect('/dashboard');
        } else {
          res.render('login', { error: "Incorrect email / password.", csrfToken: req.csrfToken() });
        }
      }
    })
  });

module.exports = router;