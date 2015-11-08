angular.module('baseData', []).factory('baseData', function() { return OffenerHaushalt; });

var offenerhaushalt = angular.module('offenerhaushalt',
      ['ngAnimate', 'baseData']);

offenerhaushalt.config(['$compileProvider', function($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);


offenerhaushalt.controller('AppController', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {

}]);
