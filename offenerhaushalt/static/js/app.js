var offenerhaushalt = angular.module('offenerhaushalt', ['ngAnimate']);

offenerhaushalt.config(['$compileProvider', function($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);


offenerhaushalt.controller('AppController', ['$scope', '$rootScope', '$http', '$location',
  function($scope, $rootScope, $http, $location) {

  console.log('je suis angular!');

}]);
