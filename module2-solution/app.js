(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuy(); // Gets the items in toBuy list
    toBuy.boughtItem = function (index) {
      ShoppingListCheckOffService.boughtItem(index);
    }; // Transfers the item from toBuy to bought list

    toBuy.get_error_message = function () {
      toBuy.error_message = "";
      if (toBuy.items.length == 0)
        toBuy.error_message = "Everything is bought!"
      return toBuy.error_message;
    };
  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.getBought() // Gets the items in the bought list

    alreadyBought.get_error_message = function () {
      alreadyBought.error_message = "";
      if (alreadyBought.items.length == 0)
        alreadyBought.error_message = "Nothing bought yet!"
      return alreadyBought.error_message;
    };
  };

  // Code for the ShoppingListCheckOffService
  function ShoppingListCheckOffService() {
    var service = this;
    var bought = []; // Stores the items bought
    var toBuy = []; // Stores the items that the user might buy

    // Stores the initial list of items
    var items = [
      {name: "cookies", quantity: 10},
      {name: "chips", quantity: 5},
      {name: "cola", quantity: 7},
      {name: "cheese", quantity: 6},
      {name: "peanunts", quantity: 20}
    ];

    // Pushes the initial list of items to the toBuy array
    for (var i = 0; i < items.length; i++)
      toBuy.push(items[i]);

    // Adds the item to the bought array when an user presses Bought
    service.boughtItem = function(index) {
      var item = toBuy[index]; // Gets the item
      toBuy.splice(index, 1); // Removes the item from toBuy array
      bought.push(item); // Pushes the item to the bought array
    };

    // Gets the items present in toBuy list
    service.getToBuy = function() {
      return toBuy;
    }

    // Gets the items present in bought list
    service.getBought = function() {
      return bought;
    }
  };

})();
