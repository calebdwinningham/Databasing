/**
 * Created by C17Caleb.Winningham on 4/30/2016.
 */
var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');
var Users = require('../models/users');
var authUtil = require('../services/authUtil');


router
    .get('/', authUtil.requireLogin('/login'), function(req,res) {
        Posts.getAll(function(err,docs) {
            posted = docs;
            res.render('home', {posted: posted, csrfToken: req.csrfToken() });
        });
    })

    .post('/', function(req, res) {
        var posted = {
            tweet:      req.body.tweet,
            username:   req.user.username,
            date:       req.body.date
        };

        Posts.createPost(posted,function(err,result) {
            if (err) {
                var error = 'Something bad happened! Please try again';
            } else {
                res.redirect('/home');
            }
        })
    });

module.exports = router;