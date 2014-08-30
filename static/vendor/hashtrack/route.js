/* Copyright (c) 2009 Marak Squires - www.maraksquires.com
 
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:
 
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/

/*********************************************************************** 

  route.js enables you to create "routes" based on a unique path
  a route can be considered a unique state
  a route may have multiple functions bound to them
  a route can be triggered by calling route('/foo').run()
  
  *** http://en.wikipedia.org/wiki/Inversion_of_control ***
     	    *** "Don't call us, we'll call you" ***

  USAGE:

	
  route('#/account').bind(customMethod);
  route('#/account').bind(customMethod2);			
			
  route('#/websites').bind(customMethod);
  route('#/websites').bind(function(){
	alert('custom closure');
  });			
			
  route('#/account').run();
  route('#/websites').run();

  WHERE THE ROUTES AT? 
  
  All routes are stored globally in window['routes']
  console.log(window['routes']);

  ROUTE ACQUISITION:

  If an immediate match isn't found for route(path) then the route will bubble 
  to the next parent route with each key appended as an arguments hash 
  
  route('#/account/marak.squires').run();
  
  No match found for '#/account/marak.squires'
  Attempting to match '#/account', injecting arguments {'marak.squires':{}}
  Match found for '#/account', running customMethod and customMethod2.

  Arguments are available as a global reference in windows.routes.args

  PROTIP: Use a Dispatcher!

  var Biggie={};
  Biggie._hashchange_last = '';
  Biggie._onhashchange=function(){
    if(Biggie._hashchange_last!=location.hash){
      Biggie._hashchange_last=location.hash;
	  route(location.hash).run();
    }
  }

  setInterval(function () {Biggie._onhashchange();}, 50);
  

  Now, instead of calling route('#/websites').run() directly
  you could simply modify the location.hash to #/websites and 
  the route would trigger its events!

*************************************************************************/

var route=function(path){
  return new route.fn.init(path);
}
route.fn = route.prototype = {
  init: function(path) {
    /* lazy init window['routes'] */
    if(typeof window['routes'] == 'undefined'){window['routes']={};window['routes'].args={};}
    if(typeof path=='undefined'){return;}
	this.path=path;	
	return false;
  },

  /* route(this.path).bind() */
  bind: function(fn) {
    if(typeof fn == 'function'){
 	  if(typeof window['routes'][this.path]=='undefined'){
	    window['routes'][this.path]={};
	  }

 	  if(typeof window['routes'][this.path].events=='undefined'){
	    window['routes'][this.path].events=new Array();
	  }
 	  
	  window['routes'][this.path].events.push(fn);
    }
  },
  
  /* route(this.path).run() */
  run: function(args) {
    if(typeof window['routes'][this.path]=='undefined'){
	  
	  /* since no route was found, splice off last part of location.hash, add to args and retry with new partial route */
	  	//console.log('no match found for ' + this.path);	
		
		/* define function args hash */
		if(typeof args == 'undefined'){var args = {};} 
		if(typeof args.path == 'undefined'){args.path = '';} 	
	 
		/* split path into array based on "/" */
		var pathArgs = this.path.split('/');
		
		/* terminating condition, stop parsing path when you reach end of string */
		if(pathArgs.length<=1){
			return false
		}

		/* remove the last element of the array and append it to args */
		args.path = args.path + '/' + pathArgs[pathArgs.length-1];
		pathArgs = pathArgs.splice(0,pathArgs.length-1);					
		
		/* re-assembled path after we have removed last key */
		var p = "";
		for(prop in pathArgs){
			p=p+pathArgs[prop]+'/';
		}
		
		/* remove trailing '/' */
		p=p.substring(0,p.length-1);
		
		/* run new route with previous keys appeneded as args */
		route(p).run(args);
		return false;
	}
	else{
			//console.log('match found for ' + this.path);
		window['routes'].args = args;
		for(var i=0; i<window['routes'][this.path].events.length; i++){
		  window['routes'][this.path].events[i]();  
		}
	}
  },
  events: new Array()
};
route.fn.init.prototype = route.fn;
