(function() {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController)
.constant('MyApiPath', "https://frozen-headland-33335.herokuapp.com");

MyInfoController.$inject = ['UserService', 'MyApiPath'];
function MyInfoController(UserService, MyApiPath) {
  var myInfoCtrl = this;
  myInfoCtrl.userInfo = UserService.getUsers()[0];
  myInfoCtrl.MyApiPath = MyApiPath;
}})();
