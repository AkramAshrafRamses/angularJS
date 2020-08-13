(function () {
'use strict';

angular.module('LCApp', [])
.controller('LCController', LCController);

LCController.$inject = ['$scope'];
function LCController($scope) {
  $scope.items = '';
  $scope.output = "";
  $scope.check = function () {
    var itemsSize = removeSpaces(splitByComma($scope.items)).length;
     // $scope.output2 = splitByComma($scope.items);
     // $scope.output3 = itemsSize;

    if(itemsSize===0){
      document.getElementById('output').style.color = "green";
      $scope.output = "Please Enter Data First";
    }
    if(itemsSize>0 && itemsSize<=3){
      document.getElementById('output').style.color = "red";
      $scope.output = "Enjoy!";
    }
    if(itemsSize>3){
      document.getElementById('output').style.color = "red";
      $scope.output = "Too Much!";
    }


  };

}

function splitByComma (string){
  var splitted = string.split(',');
  return splitted;
};

function removeSpaces(array){
  var finalArray = [];
  for(var i = 0; i<array.length ; i++){
    var n =array[i].replace(/\s+/g, "");
    if(n.length==0){

    }
    if(n===""){

    }
    else{

      finalArray.push(array[i]);
    }
  }
  return finalArray;
};



})();
