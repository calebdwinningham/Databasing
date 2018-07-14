/**
 * Created by Warren.Watkinson on 4/15/2016.
 * Copied over by Nick Harron and Caleb Winningham on 4/21/2016.
 */

"use strict";

var app = angular.module('swap-meet', []);
app.controller('userController', function($http) {
  var ctrl = this;
  $http.get('/users').then(function (res) {
    console.log(res.data);
    ctrl.users = res.data.map(function(user) 
      {return user.username;});
  });
});