$.fn.d3Click = function () {
  this.each(function (i, e) {
        var evt = new MouseEvent("click");
            e.dispatchEvent(evt);
  });
};

$(function() {
  var sites = JSON.parse($('#sites-data').html()),
  selectedState = null;
  oldSelected = null;

  var $stateSelect = $('#selectState')

  $stateSelect.change(function (event) {
    var bundesland = $(this).val()

    if (bundesland !== selectedState) {
      var evt = new MouseEvent("click")
      var mapPoly = d3.select('.subunit.' + bundesland).node()
      selectStateOnMap(bundesland, mapPoly, true)
    }

    if (!bundesland) {
      bundesland = ''
    }
    $('#cities').load('/bundesland/' + bundesland,
      function () {
        if (bundesland !== '')
          $('#map-selector').slideUp(400);
      }
    )
  });

  var $map = $('#map'),
  $welcome = $('#default-welcome'),
  $listing = $('#listing'),
  listingTemplate = Handlebars.compile($('#listing-template').html());
  cityTemplate = Handlebars.compile($('#city-template').html());

  var width = $map.width(),
      height = $map.height();

  var path = d3.geo.path();

  var svg = d3.select("#map").append("svg")
    .attr("width", width)
    .attr("height", height);

  d3.json(sites.baseurl + "static/img/deu.topo.json", showMap);

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
//      .on("mouseover", function(d) {
//        if (d.properties.code != selectedState) {
//          d3.select(this).transition().duration(200)
//          .style({'fill':'#333'});
//        }
//        if (selectedState===null) {
//          renderListing(d.properties);
//        }
//      })
//      .on("mouseout", function(d) {
//        if (d.properties.code != selectedState) {
//          d3.select(this).transition().duration(500)
//          .style({'fill':'#555'});
//        }
//        if (selectedState===null) {
//          renderListing(null);
//        }
//      })
      .on("click", function(d) {
        var that = this
        selectStateOnMap(d.properties.code, that, false)
      })
      .transition()
      .duration(400)
      .style('fill', '#7bdae3');

  //   cities = $.grep(sites.sites, function(site){ return typeof site.coordinates !== "undefined"; });
  //   svg.selectAll('circle')
  //     .data(cities)
  //     .enter()
  //     .append('circle')
  //     .attr("class", "city")
  //     .attr("cx", function(site) {
  //       return projection(site.coordinates)[0];
  //     })
  //     .attr("cy", function(site) {
  //       return projection(site.coordinates)[1];
  //     })
  //     .attr("r", 4)
//      .on("mouseover", function(d) {
//        renderCity(d);
//      })
//      .on("click", function(d) {
//        location.href = d.url;
//      });
  }

  function selectStateOnMap(state, mapPoly, nochange) {
     if (state == selectedState) {
      selectedState = null;
      d3.selectAll('.subunit').transition()
                        .duration(400)
                        .style({'fill':'#7bdae3'});
      if (!nochange) selectState('');
    } else {
      selectedState = state;
      d3.selectAll('.subunit').style({'fill':'#7bdae3'});
      d3.select(mapPoly).transition().duration(400).style({'fill':'#42928F'});
      if (!nochange) selectState(selectedState);
    }
  }

  function selectState(state) {
    $stateSelect.val(state).change();
  }

  function renderListing(state) {
    if (state === null) {
      $listing.hide();
      $welcome.show();
      return;
    }
    $welcome.hide();
    var stateSites = $.grep(sites.sites, function(site) { return site.state == state.code; });
    $listing.html(listingTemplate({
      'sites': stateSites,
      'has_sites': stateSites.length > 0,
      'no_sites': stateSites.length == 0,
      'state': state,
      'relative-baseurl': sites.baseurl
    }));
    $listing.fadeIn(100);
  }

  function renderCity(city) {
    if (city === null) {
      $listing.hide();
      $welcome.show();
      return;
    }
    $welcome.hide();
    $listing.html(cityTemplate({
      'city': city,
      'relative-baseurl': sites.baseurl
    }));
    $listing.fadeIn(100);
  }
});
