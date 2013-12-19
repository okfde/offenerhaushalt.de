var OSDE = OSDE ? OSDE : {};

OSDE.categoryColors = [
    "#CF3D1E", "#F15623", "#F68B1F", "#FFC60B", "#DFCE21",
    "#BCD631", "#95C93D", "#48B85C", "#00833D", "#00B48D", 
    "#60C4B1", "#27C4F4", "#478DCB", "#3E67B1", "#4251A3", "#59449B", 
    "#6E3F7C", "#6A246D", "#8A4873", "#EB0080", "#EF58A0", "#C05A89"
    ];

OSDE.parseArgs = function(args) {
	var queryString = {};
	args.split("&").forEach(function (pair) {
    	if (pair === "") return;
    	var parts = pair.split("=");
    	queryString[parts[0]] = parts[1] &&
        	decodeURIComponent(parts[1].replace(/\+/g, " "));
	});
	return queryString;
};

OSDE.mergeArgs = function(args) {
	var queryString = '';
	var query = $.map(args, function(v, k) {
		return encodeURIComponent(k) + '=' + encodeURIComponent(v);
	});
	return query.join('&');
};

OSDE.amount = function(num) {
	return accounting.formatMoney(num, "€", 0, ".");
}