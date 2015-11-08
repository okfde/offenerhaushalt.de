
offenerhaushalt.controller('BudgetController', ['$scope', '$http', '$q', 'baseData',
  function($scope, $http, $q, baseData) {
  var budget = baseData.budgets[baseData.currentBudget],
      apiUrl = baseData.apiUrl + budget.dataset;

  $http.get(apiUrl + '/model').then(function(res) {
    budget.model = res.data;

    var dfds = [];
    for (var i in budget.filters) {
      var filter = budget.filters[i];
      dfds.push($http.get(apiUrl + '/members/' + filter.field));
    }

    $q.all(dfds).then(function(fmems) {
      for (var i in budget.filters) {
        budget.filters[i].values = fmems[i].data.data;
      }
      $scope.budget = budget;
      console.log($scope.budget);
    });
  });
}]);
