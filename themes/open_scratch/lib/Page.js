Pg = (function($) {

	function pathBegins(path) {

		var path = path;
		var curpath = window.location.pathname;

		return function() {
			return (curpath.indexOf("/" + path) == 0
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
	            || curpath == ("/openarch-d8/" + path)
	            || curpath == ("/openarch-d8/cn" + path)
	            || curpath == ("/openarch-d8/cn/" + path)
	            );
		}
	}

	// function isTask() {

	// 	return (window.location.pathname.indexOf("/task") == 0
	//         || window.location.pathname.indexOf("/openarch-d8/task") == 0
	//         || window.location.pathname.indexOf("/openarch-d8/cn/task") == 0);
	// }

	// function isFront() {

	// 	return (window.location.pathname == "/" 
	//         || window.location.pathname == "/openarch-d8/"
	//         || window.location.pathname == "/openarch-d8/cn"
	//         || window.location.pathname == "/openarch-d8/cn/");
	// }
		
	return {
		isFront: pathEquals(""),
		isTask: pathBegins("task"),
		isPress: pathEquals("press")
	}

})(jQuery);
