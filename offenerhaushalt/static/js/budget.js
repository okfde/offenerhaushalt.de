$(function(){
  var apiEndpoint = 'https://openspending.org/api/2/aggregate',
      site = JSON.parse($('#site-config').html());

  var $treemap = $('#treemap');

  var color = d3.scale.ordinal().range(OffenerHaushalt.categoryColors),
      //color = d3.scale.category20(),
      treemap = null,
      div = null;

  function initTreemap() {
    var width = $treemap.width(),
        height = $treemap.height();

    $treemap.empty();

    treemap = d3.layout.treemap()
      .size([width, height])
      .sticky(true)
      .sort(function(a, b) { return a.amount - b.amount; })
      .value(function(d) { return d.amount; });

    div = d3.select("#treemap").append("div")
      .style("position", "relative")
      .style("width", width + "px")
      .style("height", height + "px");
  }

  function updateTreemap(data) {
    var currentDrilldown = site.hierarchies[0].drilldown[0];
    var root = {
      children: []
    };
    for (var i = 0; i < data.drilldown.length; i += 1) {
      root.children.push({
        name: data.drilldown[i][currentDrilldown].label,
        amount: data.drilldown[i].amount,
        href: data.drilldown[i][currentDrilldown].html_url
      });
    }
    var node = div.datum(root).selectAll(".node")
        .data(treemap.nodes)
      .enter().append("a")
        .attr("href", function(d){ return d.href; })
        .attr("class", "node")
        .call(positionNode)
        .style("background", function(d) { d.color = color(d.name); return '#fff';})
        .classed("big", function(d) { return d.amount > data.summary.amount / 50 })
        .text(function(d) { return d.children ? null : d.name; })
        .on("mouseover", function(d) {
          d3.select(this).transition().duration(200)
            .style({'background': d3.rgb(d.color).darker() });  
        })
        .on("mouseout", function(d) {
          d3.select(this).transition().duration(500)
            .style({'background': d.color});
        })
        .transition()
        .duration(400)
        .delay(function(d, i) { return i*20; })
        .style("background", function(d) { return d.color; });
  }

  function update() {
    if (!window.location.hash.substring(1).length) {
      window.location.hash = '0/0/'
    }

    var location = (window.location.hash.substring(1) || '0/0/').split('/', 3),
        hierarchy = parseInt(location[0], 10),
        level = parseInt(location[1], 10),
        args = OffenerHaushalt.parseArgs(location[2]);
    console.log(hierarchy, level, args);
    var url = apiEndpoint + "?dataset=" + site.dataset + "&drilldown="+site.hierarchies[0].drilldown[0];
    var reqDfd = $.ajax({url: url, dataType: 'jsonp', cache: true, 'jsonpCallback': 'osAPIData'});
    reqDfd.done(function(data) {
      updateTreemap(data);
    });
  }

  function positionNode() {
    this.style("left", function(d) { return d.x + "px"; })
        .style("top", function(d) { return d.y + "px"; })
        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
  }

  initTreemap();
  $(window).on('hashchange', update);
  update();
});