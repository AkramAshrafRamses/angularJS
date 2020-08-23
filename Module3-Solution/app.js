(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        foundItem: '<',
        onRemove: '&'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'menuItem',
      bindToController: true
    };

    return ddo;
  }

  function FoundItemsDirectiveController() {
    var menuItem = this;

  }


  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {

    var menuItem = this;
    menuItem.searchTerm = "";
    menuItem.message = "Nothing Found";




    menuItem.search = function() {
      MenuSearchService.getMatchedMenuItems(menuItem.searchTerm);
      menuItem.result = MenuSearchService.getFoundItems();
    };





    menuItem.removeItem = function(itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };



  }



  MenuSearchService.$inject = ['$http', 'ApiBasePath']

  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    var foundItems = [];

    service.getMatchedMenuItems = function(searchTerm) {

      return $http(

        {

          method: "GET",
          url: (ApiBasePath + "/menu_items.json")

        }

      ).then(function(result) {

        foundItems.length = 0;
        var allData = result.data.menu_items;

        for (var i = 0; i < allData.length; i++) {

          var description = allData[i].description;

          if (description.toLowerCase().indexOf(searchTerm) !== -1 && searchTerm !== "") {
            foundItems.push(allData[i]);
          }

        }
        console.log(foundItems);
        return foundItems;
      });




    };

    service.getFoundItems = function() {
      return foundItems;
    };

    service.removeItem = function(itemIndex) {
      foundItems.splice(itemIndex, 1);
    };

  }






})();
