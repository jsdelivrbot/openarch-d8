Pg = (function($) {

	function pathBegins(path) {

		var path = path;
		var curpath = window.location.pathname;

		return function() {
			return (curpath.indexOf("/" + path) == 0
				|| curpath.indexOf("/cn/" + path) == 0
	            || curpath.indexOf("/openarch-d8/" + path) == 0
	            || curpath.indexOf("/openarch-d8/cn/" + path) == 0
	            );
		}
	}

	function pathEquals(path) {

		var path = path;
		var curpath = window.location.pathname;

		return function() {
			return (curpath == ("/" + path)
				|| curpath == ("/cn/" + path)
	            || curpath == ("/openarch-d8/" + path)
	            || curpath == ("/openarch-d8/cn/" + path)
	            );
		}
	}

	function isFront() {

		var curpath = stripLast(window.location.pathname);

		return function() {
			return (curpath == ("")
				|| curpath == ("/cn")
	            || curpath == ("/openarch-d8")
	            || curpath == ("/openarch-d8/cn")
	            || curpath == ("/openarch-d8/frontpage")
	            || curpath == ("/openarch-d8/cn/frontpage")
	            );
		}
	}

	function stripLast(str) {

	    if (str.endsWith('/')) {
	        return str.slice(0, -1);
	    }
	    return str;
	}
		
	return {
		isFront: isFront(),
		isTask: pathBegins("task"),
		isPress: pathBegins("press"),
		isIdeas: pathBegins("ideas"),
		isPreopen: pathBegins("pre_open")
	}

})(jQuery);
