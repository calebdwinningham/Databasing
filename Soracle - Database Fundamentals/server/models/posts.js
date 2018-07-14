/**
 * Created by C17Caleb.Winningham on 5/11/2016.
 */
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

var Posts = {
    getAll: function (callback) {
        var collection = mongo.DB.collection('posts');

        collection.find().toArray(function (err, docs) {
            console.log('query result       getAll: ' + JSON.stringify(docs,null,2));
            callback(err, docs);
        });
    },

    findByEmail: function (email, callback) {
        var collection = mongo.DB.collection('posts');

        if (!typeof email === 'string') {
            callback(true);
        }
        var query = {email: email};
        collection.find(query).limit(1).next(function (err, doc) {
            console.log('query result findByEmail<'  + email + '>: ' + JSON.stringify(doc,null,2));
            callback(err, doc);
        });
    },

    createPost: function(posted,callback) {
        var collection = mongo.DB.collection('posts');

        collection.insertOne(posted, function(err,result){
            console.log('query result createPost\n' + JSON.stringify(posted,null,2) + ': ' + result);
            callback(err,result);
        });
    }
};

module.exports = Posts;