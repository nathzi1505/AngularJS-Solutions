(function() {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController)
.constant('MyApiPath', "https://frozen-headland-33335.herokuapp.com");

SignUpController.$inject = ['$http', 'MyApiPath', 'UserService'];
function SignUpController($http, MyApiPath, UserService) {
  var signUpCtrl = this;

  signUpCtrl.user = {};
  signUpCtrl.user.firstName = "";
  signUpCtrl.user.lastName = "";
  signUpCtrl.user.email = "";
  signUpCtrl.user.phone = "";
  signUpCtrl.user.menuItem = "";

  signUpCtrl.user.MenuItem = {};
  signUpCtrl.user.MenuItem.$error = false;

  signUpCtrl.checkMenuItem = function(short_name) {
    return $http.get(MyApiPath + '/menu_items/' + short_name + '.json').then(function (response) {
      signUpCtrl.user.MenuItem.$error = false
      signUpCtrl.user.title = response.data.name
      signUpCtrl.user.description = response.data.description
      return response.data;
    }, function(response) {
      signUpCtrl.user.MenuItem.$error = true;
    });
  };

  signUpCtrl.submit = function() {
    UserService.insertUser(signUpCtrl.user);
    signUpCtrl.completed = true;
  };

}})();
