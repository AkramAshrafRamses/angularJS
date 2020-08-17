(function () {
'use strict';

angular.module('ShoppingListCheckOffApp', [])
.controller('toBuyController', toBuyController)
.controller('alreadyBoughtController', alreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

toBuyController.$inject = ['ShoppingListCheckOffService'];
function toBuyController(ShoppingListCheckOffService) {
  var itemToBuy = this;


  itemToBuy.items = ShoppingListCheckOffService.getToBuyItems();


  itemToBuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}


alreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function alreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtItem = this;

  alreadyBoughtItem.items = ShoppingListCheckOffService.getAlreadyBoughtItems();


}



function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items


  var toBuyitems = [
    {name: "pepsi",quantity: "6 bottles"},
    {name: "chips",quantity: "3 bags"},
    {name: "yogurt",quantity: "8 cups"},
    {name: "milk",quantity: "4 bottles"},
    {name: "meat",quantity: "1 kilo"}
  ]

  var alreadyBoughtItems = []


  service.getToBuyItems = function () {
    return toBuyitems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };

  service.buyItem = function (itemIndex) {
    var item = toBuyitems[itemIndex]
    toBuyitems.splice(itemIndex, 1);
    alreadyBoughtItems.push(item)
  };

}

})();
