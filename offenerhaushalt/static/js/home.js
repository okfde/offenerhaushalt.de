$(function() {
	var sites = JSON.parse($('#sites-data').html()),
		selectedState = null;

	var $map = $('#map'),
		$welcome = $('#default-welcome'),
		$listing = $('#listing'),
		listingTemplate = Handlebars.compile($('#listing-template').html());

	var	width = $map.width(),
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
	        	if (d.properties.code != selectedState) {
	        		d3.select(this).transition().duration(200)
    					.style({'fill':'#333'});	
	        	}
	        	if (selectedState===null) {
	        		renderListing(d.properties);
	        	}
	        })
	        .on("mouseout", function(d) {
	        	if (d.properties.code != selectedState) {
		        	d3.select(this).transition().duration(500)
	    				.style({'fill':'#555'});
	        	}
	        	if (selectedState===null) {
	        		renderListing(null);
	        	}
	        })
	        .on("click", function(d) {
	        	if (d.properties.code == selectedState) {
	        		selectedState = null;
	        		d3.selectAll('.subunit').style({'fill':'#555'});
	        		renderListing(null);
	        	} else {
	        		selectedState = d.properties.code;
		        	d3.selectAll('.subunit').style({'fill':'#555'});
		        	d3.select(this).style({'fill':'#42928F'});
		        	renderListing(d.properties);
	        	}

	        })
	        .transition()
	        .duration(400)
	        .style('fill', '#555');
	    
    }

    function renderListing(state) {
    	if (state === null) {
    		$listing.hide();
    		$welcome.show();
    		return;
    	}
    	$welcome.hide();
		var stateSites = $.grep(sites.sites, function(site) { console.log(site.state, state.code); return site.state == state.code; });
		$listing.html(listingTemplate({
			'sites': stateSites,
			'has_sites': stateSites.length > 0,
			'no_sites': stateSites.length == 0,
			'state': state
		}));
		$listing.fadeIn(100);
    }
});