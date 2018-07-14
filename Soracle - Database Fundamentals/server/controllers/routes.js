/**
 * Created by Warren.Watkinson on 4/15/2016.
 * Copied over by Nick Harron and Caleb Winningham on 4/21/2016.
 */
var express = require('express');
var router = express.Router();
var path = require('path');
var authUtil = require('../services/authUtil');
var bcrypt = require('bcryptjs');

var login = require('./login');
var dashboard = require('./dashboard');
var Users = require('../models/users');
var Posts = require('../models/posts');

var app = express();

var dashboard = require(path.join(__dirname,'dashboard'));
var login = require(path.join(__dirname,'login'));
var register = require(path.join(__dirname,'register'));
var home = require(path.join(__dirname,'home'));

router
    .use('/register', register)
    .use('/login',login)
    .use('/home',home)
    .use('/dashboard', dashboard)

    .get('/', function(req, res) {
        res.render('index');
    })

    .get('/dashboard', authUtil.requireLogin('/login'), function(req,res) {
        res.render('dashboard');
    })

    .get('/users/:username/delete', function(req,res){
        authUtil.deleteUser(req, res);
        if (req.session) {
            req.session.reset();
        }
        res.redirect('/');
      })

    .get('/home', authUtil.requireLogin('/login'), function(req,res) {
        res.render('home');
    })

    .get('/', function(req, res) {
        if (req.session) {
            req.session.reset();
        }
        res.redirect('/');
    })

    .get('/logout', function(req, res) {
        if (req.session) {
            req.session.reset();
        }
        res.redirect('/');
    })

    .all('*',function(req,res) {
        res.redirect('/dashboard');
    });

module.exports = router;
