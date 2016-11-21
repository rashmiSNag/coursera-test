(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ShoppingListAddController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items = ShoppingListCheckOffService.getItemsToBuy();
    //vm.isEmpty = false;

    vm.isEmpty = function() {
      return vm.items.length === 0;
    }

    vm.buy = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      //vm.isEmpty = ShoppingListCheckOffService.hasNoItemsToBuy();
    }
  }

  ShoppingListAddController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var vm = this;

    vm.items =ShoppingListCheckOffService.getBoughtItems();

    vm.isEmpty = function() {
      return vm.items.length === 0;
    }
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: 'Chocolate Cake', quantity: 1 },
      { name: 'Onions', quantity: 10 },
      { name: 'Bananas', quantity: 6 },
      { name: 'Potatoes', quantity: 10 },
      { name: 'Chicken Thighs', quantity: 10 },
      { name: 'Cabbage', quantity: 1 },
      { name: 'Cheese Slices', quantity: 10 },
      { name: 'Bread', quantity: 1 },
      { name: 'Milk Can', quantity: 1 },
      { name: 'Apples', quantity: 5 }
    ];

    var boughtItems = [];

    service.getItemsToBuy = function() {
      return itemsToBuy;
    }

    service.getBoughtItems = function() {
      return boughtItems;
    }

    service.buyItem = function(itemIndex) {
      var item = itemsToBuy[itemIndex];
      itemsToBuy.splice(itemIndex, 1);
      boughtItems.push(item);
    }

    service.hasNoItemsToBuy = function() {
      return itemsToBuy.length === 0;
    }

    service.hasNoBoughtItems = function() {
      return boughtItems.length === 0;
    }
  }

})();
