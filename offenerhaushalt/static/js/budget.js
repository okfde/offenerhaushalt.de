$(function(){
  var apiEndpoint = 'https://openspending.org/api/2/aggregate',
      site = JSON.parse($('#site-config').html());

  var $treemap = $('#treemap'),
      width = $treemap.width(),
      height = $treemap.height();

  var color = d3.scale.category20();

  var treemap = d3.layout.treemap()
      .size([width, height])
      .sticky(true)
      .sort(function(a, b) { return a.amount - b.amount; })
      .value(function(d) { return d.amount; });

  var div = d3.select("#treemap").append("div")
      .style("position", "relative")
      .style("width", width + "px")
      .style("height", height + "px");

  var currentDrilldown = site.hierarchies[0].drilldown[0];

  var url = apiEndpoint + "?dataset=" + site.dataset + "&drilldown="+site.hierarchies[0].drilldown[0];

  var reqDfd = $.ajax({url: url, dataType: 'jsonp', cache: true, 'jsonpCallback': 'osAPIData'});
  reqDfd.done(function(data) {
    var totalAmount = data.summary.amount;
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
        .call(position)
        .style("background", function(d) { return color(d.name); })
        .classed("big", function(d) { return d.amount > totalAmount / 50 })
        .text(function(d) { return d.children ? null : d.name; });
  });

  function position() {
    this.style("left", function(d) { return d.x + "px"; })
        .style("top", function(d) { return d.y + "px"; })
        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
  }
});