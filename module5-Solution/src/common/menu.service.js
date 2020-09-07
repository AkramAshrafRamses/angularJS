(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var menuItemInfo={};
  var info = {firstName :"",
  lastName :"",
  email:"",
  phone:"",
  menuNumber:"",
  flag : false};

  var itemInfo = {}


  service.userInfo = function (firstName,lastName,email,phone,menuNumber) {
    info = {
      firstName : firstName,
      lastName : lastName,
      email: email,
      phone:phone,
      menuNumber:menuNumber,
      flag : true
    }
    return info;
  };

  service.getUserInfo = function () {
    return info;
  };

  service.getMenuItemInfo = function () {
    return itemInfo;
  };

  service.menuItemInfo = function (menuNumber) {

    return $http.get(ApiPath + '/menu_items/'+menuNumber+'.json').then(function (response) {
      itemInfo = response.data;
    });

    };




  service.getMenuNumberItem = function (menuNumber) {
    var response = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/"+menuNumber+".json")
    });
    return response;
  };


  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
