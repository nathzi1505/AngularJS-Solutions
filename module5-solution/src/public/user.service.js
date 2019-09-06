(function () {
"use strict";

angular.module('public')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.users = [];

  service.insertUser = function(user){
    var userObject = {
      "first" : user.firstName,
      "last" : user.lastName,
      "email" : user.email,
      "phone" : user.phone,
      "menuItem" : user.menuItem,
      "title": user.title,
      "description":user.description
    };
    service.users.push(userObject);
  };

  service.getUsers = function(){
    return service.users;
  };
}

})();
