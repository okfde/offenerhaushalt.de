
offenerhaushalt.controller('BudgetController', ['$scope', 'baseData',
  function($scope, baseData) {

  $scope.budget = baseData.budgets[baseData.currentBudget];
  
  console.log("HUHUHU", $scope.budget);

}]);
