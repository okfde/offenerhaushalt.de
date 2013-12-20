var OSDE = OSDE ? OSDE : {};

OSDE.TreeMap = function(elementID) {
	var self = this,
		$treemap = $(elementID);

	var treemap = null,
      	div = null;

	function create() {
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

	self.render = function render(data, dimension) {
		// TODO: remove elements, don't create each time. 
		create();

		var root = {
		  children: []
		};
		for (var i = 0; i < data.drilldown.length; i += 1) {
		  root.children.push({
		    name: data.drilldown[i]._current.label,
		    amount: data.drilldown[i].amount,
		    amount_fmt: data.drilldown[i].amount_fmt,
		    percentage: data.drilldown[i].percentage,
		    href: data.drilldown[i].url,
		    color: data.drilldown[i].color
		  });
		}
		var node = div.datum(root).selectAll(".node")
		    .data(treemap.nodes)
		  .enter().append("a")
		    .attr("href", function(d){ return d.href; })
		    .attr("class", "node")
		    .call(positionNode)
		    .style("background", '#fff')
		    .classed("big", function(d) { return d.amount > data.summary.amount / 50 })
		    .html(function(d) {
				if (d.percentage < 0.03) {
					return '';
				}
		    	return d.children ? null : '<span class="amount">' + d.amount_fmt + '</span>' + d.name;
		    })
		    .on("mouseover", function(d) {
		      d3.select(this).transition().duration(200)
		        .style({'background': d3.rgb(d.color).darker() });  
		    })
		    .on("mouseout", function(d) {
		      d3.select(this).transition().duration(500)
		        .style({'background': d.color});
		    })
		    .transition()
		    .duration(500)
		    .delay(function(d, i) { return i*30; })
		    .style("background", function(d) { return d.color; });
	}

	function positionNode() {
	    this.style("left", function(d) { return d.x + "px"; })
	        .style("top", function(d) { return d.y + "px"; })
	        .style("width", function(d) { return Math.max(0, d.dx - 1) + "px"; })
	        .style("height", function(d) { return Math.max(0, d.dy - 1) + "px"; });
    }
};