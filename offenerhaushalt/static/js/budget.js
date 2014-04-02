$(function(){
  var //apiEndpoint = 'https://openspending.org/api/2/aggregate',
      site = JSON.parse($('#site-config').html()),
      embedTemplate = Handlebars.compile($('#embed-template').html());
      $embedCode = $('#embed-code')
      baseFilters = {};

  $.each(site.filters, function(i, f) {
    baseFilters[f.field] = f.default;
  });

  var $hierarchyMenu = $('#hierarchy-menu'),
      $infobox = $('#infobox'),
      $filterValues = $('.site-filters .value'),
      treemap = new OSDE.TreeMap('#treemap'),
      table =  new OSDE.Table('#table');

  function getData(drilldown, cut) {
    var cut = $.map(cut, function(v, k) { if((v+'').length) { return k+':'+v; }}); 
    if ($.isArray(drilldown)) {
      drilldown = drilldown.sort().join('|');
    }
    var key = cut.sort().join('|') + '@' + drilldown;
    var hash = CryptoJS.SHA1(key).toString();
    return $.getJSON('/static/aggregates/' + site.dataset + '/' + hash + '.json');  
    /*
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
    */  
  }

  $('#infobox-toggle').click(function(e) {
    var $e = $(e.target);
    if ($e.hasClass('active')) {
      $e.removeClass('active');
      $infobox.slideUp();
    } else {
      $e.addClass('active');
      $infobox.slideDown();
    }
    return false;
  });

  function parsePath(hash) {
    var path = {},    
        location = hash.split('/'),
        levels = location.slice(1, location.length-1);

    path.hierarchyName = location[0];
    path.hierarchy = site.hierarchies[path.hierarchyName];
    path.hierarchy.cuts = path.hierarchy.cuts || {};
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
    var rawPath = window.location.hash.substring(1);
    if (!rawPath.length) {
      rawPath = site.default + '/'
    }

    var path = parsePath(rawPath),
        rootDimension = path.hierarchy.drilldowns[0],
        rootColor = null;
        color = d3.scale.ordinal().range(OSDE.categoryColors),
        cuts = $.extend({}, baseFilters, path.hierarchy.cuts || {}, path.args);

    $hierarchyMenu.find('.btn').removeClass('active');
    $hierarchyMenu.find('.btn.' + path.hierarchyName).addClass('active');

    $filterValues.removeClass('active');
    $filterValues.each(function(i, f) {
      var $f = $(f), field = $f.data('field'), value = $f.data('value'), modifiers = {};
      modifiers[field] = value;
      $f.attr('href', makeUrl(path, modifiers));
      if (cuts[field]==value) {
        $f.addClass('active');
      }
    });

    $.each(site.filters, function(i, f) {
      $('.site-filters strong[data-field="' + f.field + '"]').html(cuts[f.field] || 'Alle');
    });

    var baseCuts = $.extend({}, baseFilters, path.hierarchy.cuts);
    getData(rootDimension, baseCuts).done(function(base) {
      
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
    $embedCode.text(embedTemplate({
      name: site.name,
      baseurl: document.location.href.split('#')[0],
      url: document.location.href,
      hash: document.location.hash,
    }));
  }

  hashtrack.onhashchange(update);
});
