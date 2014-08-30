/* hashtrack.js
   Provides mechanism to poll URL hash changes, parse like a querystring,
   and hook into value changes.

   Copyright (c) 2009 Calvin Spealman, ironfroggy@gmail.com

   Permission is hereby granted, free of charge, to any person obtaining
   a copy of this software and associated documentation files (the
   "Software"), to deal in the Software without restriction, including
   without limitation the rights to use, copy, modify, merge, publish,
   distribute, sublicense, and/or sell copies of the Software, and to
   permit persons to whom the Software is furnished to do so, subject to
   the following conditions:

   The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the Software.

   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
   EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
   NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
   LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
   OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
   WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 */

var hashtrack = {
    'frequency': 100,
    'last_hash': window.location.hash,
    'onhashchange_callbacks': [],
    'onhashvarchange_callbacks': {},
    'interval': null,

    'check_hash': function() {
        if (window.location.hash != hashtrack.last_hash)
        {
            hashtrack.last_hash = location.hash;
            hashtrack.update();
            hashtrack.call_onhashchange_callbacks();
        }
    },
    'init': function() {
        if (hashtrack.interval === null) {
            hashtrack.interval = setInterval(hashtrack.check_hash,
                             hashtrack.frequency);
        }
        if (typeof hashtrack.vars === 'undefined') {
            hashtrack.vars = {};
        }
        hashtrack.update();
        // Act on the hash as if it changed when the page loads, if its
        // "important"
        if (window.location.hash) {
            hashtrack.call_onhashchange_callbacks();
        }
    },
    'setFrequency': function (freq) {
        if (hashtrack.frequency != freq) {
            hashtrack.frequency = freq;
            if (hashtrack.interval) {
                clearInterval(hashtrack.interval);
                hashtrack.interval = setInterval(
                        hashtrack.check_hash, hashtrack.frequency);
            }
        }
    },
    'stop': function() {
        clearInterval(hashtrack.interval);
        hashtrack.interval = null;
    },
    'onhashchange': function(func, first_call) {
        hashtrack.onhashchange_callbacks.push(func);
        var pq = hashtrack.parseHash(location.hash);
        func(location.hash.slice(1), pq.path);
    },
    'onhashvarchange': function(varname, func, first_call) {
        if (!(varname in hashtrack.onhashvarchange_callbacks)) {
            hashtrack.onhashvarchange_callbacks[varname] = [];
        }
        hashtrack.onhashvarchange_callbacks[varname].push(func);
        func(varname, hashtrack.getVar(name));
    },
    'call_onhashchange_callbacks': function() {
        var hash = window.location.hash.slice(1);
        for (var i = 0; i < hashtrack.onhashchange_callbacks.length; i++) {
            var f = hashtrack.onhashchange_callbacks[i];
            if (typeof f === 'function') {
                f(hash);
            }
        }
    },
    'call_onhashvarchange_callbacks': function(name, value) {
        if (name in hashtrack.onhashvarchange_callbacks) {
            for (var i in hashtrack.onhashvarchange_callbacks[name]) {
                var f = hashtrack.onhashvarchange_callbacks[name][i];
                if (typeof f === 'function') {
                    f(name, value);
                }
            }
        }
    },
    'update': function () {
        var vars = hashtrack.all();
        for (var k in vars) {
            if (hashtrack.vars[k] != vars[k]) {
                hashtrack.call_onhashvarchange_callbacks(k, vars[k]);
            }
        }
        hashtrack.vars = vars;
    },
    'all': function () {
        var hash = window.location.hash.slice(1, window.location.hash.length),
            vars, result;
        hash = hash.split('?')[1] || hash;
        vars = hash.split("&"),
        result = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            result[pair[0]] = pair[1];
        }
        return result;
    },
    'getVar': function (key) {
        return hashtrack.vars[key];
    },

    'setVar': function (variable, value) {
        var hash = window.location.hash.slice(1, window.location.hash.length);
        var path = hash.replace(/\?.*/, '');
        var qs;
        if (hash.match(/\?/)) {
            qs = hash.replace(/.*\?/, '');
        } else {
            qs = "";
        }

        var new_qs;
        if (qs.indexOf(variable + '=') == -1) {
            new_qs = qs + '&' + variable + '=' + value;
        } else {
            new_qs = qs.replace(variable + '=' + hashtrack.getVar(variable), variable + '=' + value);
        }
        window.location.hash = path + '?' + new_qs;
        hashtrack.vars[variable] = value;
        hashtrack.call_onhashvarchange_callbacks(variable, value);
    },

    'getPath': function () {
        return hashtrack.parseHash(location.hash).path;
    },

    'setPath': function (new_path) {
        pq = hashtrack.parseHash(location.hash);
        if (pq.path == new_path) {
            return;
        } else {
            if (new_path[0] !== '/') {
                new_path = '/' + new_path;
            }
            pq.path = new_path

            var build = [];
            if (pq.path.length > 0) {
                build.push(pq.path);
            }
            if (pq.qs.length > 0) {
                build.push('?');
                build.push(pq.qs);
            }

            location.hash = build.join('');
        }
    },

    parseHash: function (string) {
        var path__qs = _path_qs(string);
        return {'path': path__qs[0], 'qs': path__qs[1]}
    }
};

function _path_qs (string) {
    var string = string.replace(/^#/, '');
    var path__qs = string.split("?");
    if (path__qs.length == 1) {
        if (string[0] == "/") {
            return [path__qs[0], ""];
        } else {
            return ["", path__qs[0]];
        }
    } else {
        return [path__qs[0], path__qs[1]];
    }
}

function _path (string) {
    return _path_qs(string)[0];
}

function _qs (string) {
    return _path_qs(string)[1];
}

function addHashQuery(a) {
    var href = $(a).attr('href');
    var new_vars = hashtrack.all(_qs(href));
    $.each(new_vars, function (name, value) {
	    hashtrack.set(name, value);
	});
    return false;
}

if (typeof route != "undefined") {
    hashtrack.path = function (match, func) {
	route(match).bind(function(){
		path_and_qs = routes.args.path.split('?');
		qs = path_and_qs[1];
		path = [];
		$.each(path_and_qs[0].split('/'), function(){ if (this.length > 0) { path.push(this); } });
		func(path);
	    });
    };
}

if (typeof $ != "undefined") {
    $(document).ready(hashtrack.init);
} else if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(hashtrack.init);
}
