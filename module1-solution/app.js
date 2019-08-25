(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope']
  function LunchCheckController($scope) {

    $scope.lunch_menu = ""; // Initializes the lunch menu string
    $scope.message = ""; // Initializes the message

    var sanitize = function (strArray) {
      var resultArray = [];
      for (var i = 0; i < strArray.length; i++)
        if (strArray[i] !== '')
          resultArray.push(strArray[i]);
      return resultArray;
    }

    var getNoOfItems = function () {
      $scope.lunch_items = sanitize($scope.lunch_menu.split(',')); // Gets the items given as input and sanitizes it
      return $scope.lunch_items.length; // Returns the length
    }

    $scope.checkNumberOfItems = function () {
      var arrayLength = getNoOfItems();
      if (arrayLength > 3)
      {
        $scope.message = "Too much!";
        $scope.messageStyle = { "color": "green" };
        $scope.textboxStyle = {
          "border": "2px solid green"
        };
      }
      else if (arrayLength == 0)
      {
        $scope.message = "Please enter data first";
        $scope.messageStyle = { "color": "red" };
        $scope.textboxStyle = {
          "border": "2px solid red"
        };
      }
      else
      {
        $scope.message = "Enjoy";
        $scope.messageStyle = { "color": "green" };
        $scope.textboxStyle = {
          "border": "2px solid green"
        };
      }
    };
  };

})();
