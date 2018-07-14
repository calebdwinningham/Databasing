var session = require('client-sessions');
var Users = require('../models/users');
var Posts = require('../models/posts');

module.exports = {
  /*
   * @param {String} redirect - string of route for redirection on error
   *
   * if the user is authenticated: moves to next middleware (requested route)
   * if the user is not authenticated: redirects to route designated by @param
   */
  requireLogin : function(redirect) {
    return function(req, res, next) {
      if (!req.user) {
        res.redirect(redirect);
      } else {
        next();
      }
    }
  },

  /*
   * @param {String[]} privReqd - array of strings representing roles required to perform
   *   requested application
   * @param {String} redirect - string of route for redirection on error
   *
   * if the user has a role listed in the array: moves to next middleware (requested route)
   * if the user is not authenticated: redirects to route designated by @param
   */
  requirePermissions : function(privReqd,redirect) {
    return function(req,res,next) {
      if (!req.user || !req.user.role || privReqd.indexOf(req.user.role) < 0) {
        res.redirect(redirect);
      } else {
        next();
      }
    }
  },

  /*
   * @param {Object} req - http request object
   * @param {Object} res - http response object
   * @param {Object} user - a user object with 7 attributes
   *
   * if the user has a role listed in the array: moves to next middleware (requested route)
   * if the user is not authenticated: redirects to route designated by @param
   */
  createUserSession : function(req, res, user) {
    var cleanUser = {
      username:   user.username,
      userdata:   { firstname:  user.userdata.firstname, lastname:   user.userdata.lastname},
      email:      user.email,
      role:       user.role || 'user',
      data:       user.data || {}
    };
    req.session.user = cleanUser;
    req.user = cleanUser;
    res.locals.user = cleanUser;
    console.log('new session: ' + JSON.stringify(req.session.user,null,2));
  },

  deleteUser : function(req,res) {
    Users.deleteUsers(req.session.user, function(err, user) {
    })
  },

  updateUser : function(change, req) {
    Users.updateUsers(change, req.session.user, function(err, user) {
    })
  },

  /*
   * @param {Object} req - http request object
   * @param {Object} res - http response object
   * @param {function} next - the next middleware to be executed
   *
   * if the user email in the session is found in the database:
   *   create a session and move to next middleware
   * if the user email in the session is not found in the database:
   *   move to next middleware
   */
  simpAuth : function(req,res,next) {
    if (req.session && req.session.user) {
      Users.findByEmail(req.session.user.email, function(err, user) {
        if (user) {
          console.log('simpAuth');
          module.exports.createUserSession(req, res, user);
        }
        next();
      });
    } else {
      next();
    }
  }
};
