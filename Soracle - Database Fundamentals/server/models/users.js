/**
 * Created by Warren.Watkinson on 4/15/2016.
 * Copied over by Nick Harron and Caleb Winningham on 4/21/2016.
 * Adjusted as needed, but mostly the same since we use Users in our project
 */

var path = require('path');
var mongo = require('mongodb');
var mongoUtil = require(path.join(__dirname,'..','services','mongoUtil'));

// Connect to Mongo
mongoUtil.connect('soracle');

var Users = {
  getAll: function (callback) {
    var collection = mongo.DB.collection('users');

    collection.find().toArray(function (err, docs) {
      console.log('query result getAll: ' + JSON.stringify(docs,null,2));
      callback(err, docs);
    });
  },

  deleteUsers: function(user, callback){
    console.log(user.username);
    var collection = mongo.DB.collection('users');
    collection.deleteOne({username: user.username})
  },

  updateUsers: function(change, user, callback){
    var collection = mongo.DB.collection('users');
    collection.updateOne({username: user.username}, {$set: {"username": change}})
  },

  findByEmail: function (email, callback) {
    var collection = mongo.DB.collection('users');

    if (!typeof email === 'string') {
      callback(true);
    }
    var query = {email: email};
    collection.find(query).limit(1).next(function (err, doc) {
      console.log('query result findByEmail<'  + email + '>: ' + JSON.stringify(doc,null,2));
      callback(err, doc);
    });
  },

  createUser: function(user,callback) {
    var collection = mongo.DB.collection('users');

    collection.insertOne(user, function(err,result){
      console.log('query result createUser\n' + JSON.stringify(user,null,2) + ': ' + result);
      callback(err,result);
    });
  }
};

module.exports = Users;

