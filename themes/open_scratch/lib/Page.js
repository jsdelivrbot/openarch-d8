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
				|| curpath == ("/frontpage")
	            || curpath == ("/cn/frontpage")
	            || curpath == ("/openarch-d8")
	            || curpath == ("/openarch-d8/cn")
	            || curpath == ("/openarch-d8/frontpage")
	            || curpath == ("/openarch-d8/cn/frontpage")
	            );
		}
	}

	function stripLast(str) {

		// endswith pollyfill ****************************************************************************
		// src https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
		if (!String.prototype.endsWith) {
		  String.prototype.endsWith = function(searchString, position) {
		      var subjectString = this.toString();
		      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
		        position = subjectString.length;
		      }
		      position -= searchString.length;
		      var lastIndex = subjectString.indexOf(searchString, position);
		      return lastIndex !== -1 && lastIndex === position;
		  };
		}
		//*************************************************************************************************

	    if (str.endsWith('/')) {
	        return str.slice(0, -1);
	    }
	    return str;
	}
		
	return {

		isFront: isFront(),
		isPractice: pathBegins("practice"),
		isPeople: pathBegins("people"),
		isManifesto: pathBegins("manifesto"),
		isAwards: pathBegins("awards"),
		isContact: pathBegins("contact"),
		isProjTable: pathBegins("projects/table"),
		isProjGallery: pathBegins("projects/gallery"),
		isIdeas: pathBegins("ideas"),
		isVideos: pathBegins("videos"),
		isBooks: pathBegins("books"),
		isPress: pathBegins("press"),
		isEvents: pathBegins("events"),
		isEvent: pathBegins("event"),
		isJobs: pathBegins("jobs"),
		isTask: pathBegins("task"),
		isMedia: pathBegins("media"),
		isPreopen: pathBegins("pre_open")
	}

})(jQuery);
