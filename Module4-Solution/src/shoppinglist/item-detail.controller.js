(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['ShoppingListService','items' ];
function ItemDetailController(ShoppingListService,items) {
  var itemDetail = this;
  itemDetail.items = items;
  // itemDetail.items = items;
  console.log(itemDetail.items);





}

})();
