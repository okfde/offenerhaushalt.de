$(function() {

	//console.log('hi!');

	var $map = $('#map'),
		width = $map.width(),
		height = $map.height();

	var path = d3.geo.path();

	var svg = d3.select("#map").append("svg")
    	.attr("width", width)
    	.attr("height", height);

    d3.json("/static/img/deu.topo.json", showMap);

    function showMap(error, de) {
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
	        	d3.select(this).transition().duration(200)
    				.style({'fill':'#333'});
	        })
	        .on("mouseout", function(d) {
	        	d3.select(this).transition().duration(500)
    				.style({'fill':'#555'});
	        })
	        .on("click", function(d) { console.log(d); });
	    
    }
});