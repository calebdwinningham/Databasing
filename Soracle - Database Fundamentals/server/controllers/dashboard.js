var express = require('express');
var router = express.Router();
var authUtil = require('../services/authUtil');


router
  .get('/', authUtil.requireLogin('/login'), function(req,res) {
    res.render('dashboard', { csrfToken: req.csrfToken() });
  })

  .post('/', function(req, res) {
      var changed = req.body.newusername;
      console.log(changed);
      authUtil.updateUser(changed, req);
      res.redirect('/dashboard');
 });

module.exports = router;
