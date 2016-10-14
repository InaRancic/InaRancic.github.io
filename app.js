(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {

  var comma = ',';
  function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    //console.log(arrayOfStrings.length) ;
    return arrayOfStrings.length;
  }
  $scope.howMuch = function(){
    console.log($scope.dishes);
    if($scope.dishes){
      var dishesNum = splitString($scope.dishes, comma);
      if(dishesNum<=3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!";
      }
      $scope.color = "green";
    }else{
      $scope.message = "Please enter data first";
      $scope.color = "red";
    }

  }

}

})();
