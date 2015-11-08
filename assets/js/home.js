
offenerhaushalt.controller('HomeController', ['$scope', 'baseData',
  function($scope, baseData) {
  $scope.state = {};

  var element = document.querySelectorAll('#map')[0],
      width = element.clientWidth,
      height = element.clientHeight;

  var path = d3.geo.path(),
      svg = d3.select("#map").append("svg")
        .attr("width", width)
        .attr("height", height),
      pinnedState = null;

  var selectState = function(prop) {
    var state = prop || {};
    state.budgets = [];
    for (var i in baseData.budgets) {
      var budget = baseData.budgets[i];
      if (budget.state == state.code) {
        state.budgets.push(budget);
      }
    }
    $scope.state = state;
    $scope.$apply();
  };

  d3.json("/assets/img/deu.topo.json", function (error, de) {
  	var subunits = topojson.feature(de, de.objects.deu);

    var projection = d3.geo.mercator()
        .center([10.5, 51.35])
        .scale(2500)
        .translate([width / 2, height / 2]);

    var path = d3.geo.path()
        .projection(projection);

    svg.selectAll(".subunit")
        .data(subunits.features)
      .enter().append("path")
        .attr("class", function(d) { return "subunit " + d.properties.code; })
        .attr("d", path)
        .on("mouseover", function(d) {
        	if (d.properties.code != pinnedState) {
        		d3.select(this).transition().duration(200)
  					.style({'fill':'#333'});
        	}
        	if (pinnedState === null) {
        		selectState(d.properties);
        	}
        })
        .on("mouseout", function(d) {
        	if (d.properties.code != pinnedState) {
	        	d3.select(this).transition().duration(500)
    				.style({'fill':'#555'});
        	}
        	if (pinnedState === null) {
        		selectState(null);
        	}
        })
        .on("click", function(d) {
        	if (d.properties.code == pinnedState) {
        		pinnedState = null;
            selectState(null);
        		d3.selectAll('.subunit').style({'fill':'#555'});
        	} else {
        		pinnedState = d.properties.code;
            selectState(d.properties);
	        	d3.selectAll('.subunit').style({'fill':'#555'});
	        	d3.select(this).style({'fill':'#42928F'});

        	}

        })
        .transition()
        .duration(400)
        .style('fill', '#555');

  });

}]);
