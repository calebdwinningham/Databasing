/**
 * Created by Warren.Watkinson on 4/13/2016.
 * Copied over by Nick Harron and Caleb Winningham on 4/21/2016.
 */

var mongo = require('mongodb');
var connection = mongo.MongoClient;

exports.connect = function() {
  if(mongo.DB) {return mongo.DB}

  connection.connect('mongodb://localhost:27017/soracle', function (err, db) {
    var d = new Date();
    if (err) {
      console.log(d.toUTCString() + ': Check mongod server');
      process.exit();
    } else {
      mongo.DB = db;
      console.log(d.toUTCString() + ': Mongo connection established');
      return mongo.DB;
    }
  });
};

