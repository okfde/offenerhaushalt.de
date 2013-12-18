$(function() {

	//console.log('hi!');

	var $map = $('#map'),
		width = $map.width(),
		height = $map.height();

	var path = d3.geo.path();

	var svg = d3.select("#map").append("svg")
    	.attr("width", width)
    	.attr("height", height);

    d3.json("/static/img/vg250_laender.json", showMap);

    function showMap(error, de) {
    	console.log(topojson);
    	var subunits = topojson.feature(de, de.objects.vg250_bld);

	    var projection = d3.geo.mercator()
	        .center([10.5, 51.35])
	        .scale(2500)
	        .translate([width / 2, height / 2]);


	    var path = d3.geo.path()
	        .projection(projection);
	        //.pointRadius(4);

	    
	    svg.append("path")
	        .datum(subunits)
	        .attr("d", path)
	        .style('fill', '#fcfcfc')
			.style('stroke', 'gray')
			.style('stroke-width', 1);
	    /*
	    svg.selectAll(".subunit")
	        .data(subunits.geometries)
	      .enter().append("path")
	        .attr("class", function(d) { return "subunit " + d.properties.name; })
	        .attr("d", path)
	        .on("click", function(d) {});
	    */
    }

	console.log(width, height);
});