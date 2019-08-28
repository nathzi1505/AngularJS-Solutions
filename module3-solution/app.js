(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

// FoundItems directive
function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'narrow',
    bindToController: true,
  };
  return ddo;
};

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var narrow = this; // Gets the object
  narrow.searchTerm = ""; // Gets the searchTerm
  narrow.findItems = function(searchTerm){
    if (searchTerm == "")
    {
      narrow.error = "Nothing found!"
      narrow.found = undefined; // Making the find attribute undefined
      return; // Exits from the function
    }
    MenuSearchService.getMatchedMenuItems(searchTerm).then(
      function(result){
        narrow.found = result; // Gets the results from the search
        if (narrow.found == 0)
        {
          narrow.error = "Nothing found!";
          narrow.found = undefined; // Making the find attribute undefined
        }
        else
          narrow.error = "";
    })
  }; // Gets the menu items found using the match
  narrow.removeItem = function(index){
    narrow.found.splice(index, 1);
  }; // Removes the item from the list
};

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this; // Gets the object

  // Gets the menu items using Ajax
  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"}
    ).then(
      function (response){
        var items = response.data.menu_items;
        var foundItems = []; // Stores the items that will be found
        for(var i = 0; i < items.length; i++)
          if (items[i].description.includes(searchTerm))
            foundItems.push(items[i]);
        return foundItems;
      }
    ); // Ajax code to get data from the url
  };
};

})();
