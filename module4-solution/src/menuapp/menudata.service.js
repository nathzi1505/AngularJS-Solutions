(function(){
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];
  function MenuDataService($http, ApiBasePath) {
    var service = this;

    // Gets the categories using AJAX
    service.getAllCategories = function(){
      return $http({
        url: (ApiBasePath + "categories.json")
      }).then(
        function (response){
          var items = response.data;
          return items;
        }
      ); // Ajax code to get data from the url
    };

    // Gets the items for a particular category
    service.getItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: (ApiBasePath + "menu_items.json"),
        params: {category: categoryShortName}
      }).then(
        function (response){
          var items = response.data.menu_items;
          return items;
        }
      ); // Ajax code to get data from the url
    };
  };
})();
