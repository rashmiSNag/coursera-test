(function () {

  'use strict';

  angular.module('LunchCheckerApp', [])
  .controller('LunchCheckerController', LunchCheckerController);

  LunchCheckerController.$inject = ['$scope'];
  function LunchCheckerController($scope) {
    $scope.items = '';
    $scope.messageContainer = document.getElementsByClassName('message');

    $scope.checkItems = function (items) {
      var tooMuch = null;
      var itemsList;
      var item =null;
      if ($scope.items) {
        itemsList = $scope.items.split(',')
       // console.log("Number of Items: ", itemsList.length);
       // console.log("Items: ", itemsList);
        itemsList.length <= 3 ? tooMuch = true : tooMuch = false;
        itemsList.forEach(function(element) {
          if(element == "")
            {
              tooMuch = 0;
            }
        });


      }

      return tooMuch;
    };

    $scope.showNotification = function () {
      var type, message;
      if ($scope.checkItems() === true) {
          type = 'success';
          message = 'Enjoy!';
      } else if($scope.checkItems() === false) {
          type = 'danger';
          message = 'Too much!';
      }else if($scope.checkItems() === 0) {
          type = 'danger';
          message = 'Please enter valid data!';
      }else {
          type = 'info';
          message = 'Please enter data first';
        }
      var template = '<div class="alert alert-' + type + ' fade in">' +
        '<h2>' + message + '</h2>' +
      '</div>';
        $scope.messageContainer[0].innerHTML = template;
      };

  }
})();
