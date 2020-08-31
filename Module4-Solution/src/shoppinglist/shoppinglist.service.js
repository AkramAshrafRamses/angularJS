(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$http']
function ShoppingListService($http) {
  var service = this;

  var items = [];

  service.getAllCategories = function () {
    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    });

    return response;
  };

  // service.getItemsForCategory = function (categoryShortName) {
  //   var response = $http({
  //     method: "GET",
  //     url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
  //   });
  //   return response;
  // };

  service.getItemsForCategory = function(categoryShortName) {

    return $http(

      {

        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName

      }

    ).then(function(result) {

      var allData = result.data.menu_items;


      //console.log(allData);
      return allData;
    });




  };




}

})();
