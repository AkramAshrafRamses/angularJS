(function() {
  "use strict";

  angular.module('public')
    .controller('InfoController', InfoController);

  InfoController.$inject = ['MenuService'];

  function InfoController(MenuService) {
    var info = this;

    info.values = MenuService.getUserInfo();
    console.log (info.values);

    info.details = MenuService.getMenuItemInfo();
    console.log (info.details);






  }

})();
