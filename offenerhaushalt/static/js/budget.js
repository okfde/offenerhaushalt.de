$(function(){
  var apiEndpoint = 'https://openspending.org/api/2/aggregate',
      site = JSON.parse($('#site-config').html());

  var treemap = new OSDE.TreeMap('#treemap'),
      table =  new OSDE.Table('#table');

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

    var path = parsePath(window.location.hash),
        rootDimension = path.hierarchy.drilldowns[0],
        rootColor = null;
        color = d3.scale.ordinal().range(OSDE.categoryColors),
        cuts = $.extend({}, path.hierarchy.cuts || {}, path.args);

    getData(rootDimension, path.hierarchy.cuts).done(function(base) {
      
      $.each(base.drilldown, function(i, drilldown) {
        drilldown.color = color(i);
        if (cuts[rootDimension] && cuts[rootDimension] == drilldown[rootDimension].name) {
          rootColor = d3.rgb(drilldown.color);
        }
      });

      getData(path.drilldown, cuts).done(function(data) {
        var dimension = path.drilldown;

        if (dimension != rootDimension) {
          color = d3.scale.linear();
          color = color.interpolate(d3.interpolateRgb)
          color = color.range([rootColor.brighter(), rootColor.darker().darker()]);
          color = color.domain([data.summary.num_drilldowns, 0]);
        }

        data.summary.amount_fmt = OSDE.amount(data.summary.amount);
        
        $.each(data.drilldown, function(e, drilldown) {
        
          drilldown._current = drilldown[dimension];
          drilldown.amount_fmt = OSDE.amount(drilldown.amount);
          drilldown.percentage = drilldown.amount / data.summary.amount;
          drilldown.small = drilldown.percentage < 0.01;
          drilldown.percentage_fmt = (drilldown.percentage*100).toFixed(2) + '%';
          drilldown.percentage_fmt = drilldown.percentage_fmt.replace('.', ',');

          if (!path.bottom) {
            var modifiers = {};
            modifiers[dimension] = drilldown._current.name;
            drilldown.url = makeUrl(path, modifiers);
          } else {
            drilldown.no_url = true;
          }
          drilldown.color = color(e)
        
        });
        
        treemap.render(data, path.drilldown);
        table.render(data, path.drilldown);
      });
    });
  }

  hashtrack.onhashchange(update);
});