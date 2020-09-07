(function() {
  "use strict";

  angular.module('public')
    .controller('RegistrationController', RegistrationController);

  RegistrationController.$inject = ['MenuService'];

  function RegistrationController(MenuService) {
    var reg = this;


    reg.submit = function() {
      reg.firstName = reg.user.firstName;
      reg.lastName = reg.user.lastName;
      reg.email = reg.user.email;
      reg.phone = reg.user.phone;
      reg.menuNumber = reg.user.menuNumber;
      var promise = MenuService.getMenuNumberItem(reg.menuNumber);

      promise.then(function(response) {
          reg.allValid = true;
          MenuService.userInfo(reg.firstName, reg.lastName, reg.email, reg.phone, reg.menuNumber);
          console.log("success");
        })
        .catch(function(error) {
          reg.allValid = false;
          console.log("Something went terribly wrong.");
        });

        var promise = MenuService.menuItemInfo(reg.menuNumber);



    }

  }

})();
