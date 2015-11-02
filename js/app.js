angular.module('budgets', []).factory('budgets', function() { return BUDGETS; });

var offenerhaushalt = angular.module('offenerhaushalt',
      ['ngAnimate', 'budgets']);

offenerhaushalt.config(['$compileProvider', function($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);


offenerhaushalt.controller('AppController', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {

}]);
