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

  function parsePath(hash) {
    var path = {},    
        location = hash.substring(1).split('/'),
        levels = location.slice(1, location.length-1);

    path.hierarchyName = location[0];
    path.hierarchy = site.hierarchies[path.hierarchyName];
    path.level = levels.length;
    path.bottom = path.level >= (path.hierarchy.drilldowns.length - 1);
    path.drilldown = path.hierarchy.drilldowns[path.level];
    path.args = OSDE.parseArgs(location[location.length-1]);

    $.each(levels, function(i, val) {
      path.args[path.hierarchy.drilldowns[i]] = decodeURIComponent(val);
    });
    return path;
  }

  function makeUrl(path, modifiers) {
    var args = $.extend({}, path.args, modifiers),
        url = '#' + path.hierarchyName + '/';

    $.each(path.hierarchy.drilldowns, function(i, drilldown) {
      if (args[drilldown]) {
        url += args[drilldown] + '/';
        delete args[drilldown];
      }
    });
    return url + OSDE.mergeArgs(args);
  }

  function update() {
    if (!window.location.hash.substring(1).length) {
      window.location.hash = site.default + '/'
    }

    var path = parsePath(window.location.hash);
    var cuts = $.extend({}, path.hierarchy.cuts || {}, path.args);

    getData(path.drilldown, cuts).done(function(data) {
      var dimension = path.drilldown;
      $.each(data.drilldown, function(e, drilldown) {
        if (!path.bottom) {
          var modifiers = {};
          modifiers[dimension] = drilldown[dimension].name;
          drilldown.url = makeUrl(path, modifiers);
        }
      });
      treemap.render(data, path.drilldown);
    });
  }

  hashtrack.onhashchange(update);
});