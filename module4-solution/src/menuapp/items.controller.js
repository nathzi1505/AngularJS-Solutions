(function () {
'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['data'];
  function ItemsController(data) {
    var items = this;
    items.menu_items = data
  };

})();
