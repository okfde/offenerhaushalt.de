$(function(){
  var apiEndpoint = 'https://openspending.org/api/2/aggregate',
      site = JSON.parse($('#site-config').html());

  var treemap = new OSDE.TreeMap('#treemap');

  function getData(drilldown, cut) {
    var cutStr = $.map(cut, function(v, k) { return k+':'+v; }); 
    return $.ajax({
      url: apiEndpoint,
      data: {
        dataset: site.dataset,
        drilldown: drilldown,
        cut: cutStr.join('|')
      },
      dataType: 'jsonp',
      cache: true,
      jsonpCallback: 'osAPIData'
    });    
  }

  function update() {
    if (!window.location.hash.substring(1).length) {
      window.location.hash = site.default + '/0/'
    }

    var location = window.location.hash.substring(1).split('/', 3),
        hierarchyName = location[0],
        level = parseInt(location[1], 10),
        args = OSDE.parseArgs(location[2]),
        hierarchy = site.hierarchies[hierarchyName],
        cuts = $.extend({}, hierarchy.cuts || {}, args);

    getData(hierarchy.drilldowns[level], cuts).done(function(data) {
      var dimension = hierarchy.drilldowns[level];
      $.each(data.drilldown, function(e, drilldown) {
        var query = $.extend({}, args);
        query[dimension] = drilldown[dimension].name;
        drilldown.url = '#' + hierarchyName + '/' + (level+1) + '/' + OSDE.mergeArgs(query);
      });
      treemap.render(data, hierarchy.drilldowns[level]);
    });
  }

  function positionNode() {
    this.style("left", function(d) { return d.x + "px"; })
        .style("top", function(d) { return d.y + "px"; })
        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
  }

  hashtrack.onhashchange(update);
});