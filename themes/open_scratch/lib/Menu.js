MyMenu = (function($) {

	// $(document).ready(function() {});

	// this needs to be rewritten for performance.
	function reset() {

		if (Pg.isPractice()
			|| Pg.isPeople()
			|| Pg.isManifesto()
			|| Pg.isAwards()
			|| Pg.isContact()) {

			expandAboutUs()

		} else if (Pg.isIdeas()) {

			expandWork()

		} else if (Pg.isProjTable()
			|| Pg.isProjGallery()
			|| Pg.isTask()) {

			expandWork()
			expandProjects()

		} else if (Pg.isVideos()
			|| Pg.isBooks()
			|| Pg.isPress()) {

			expandMedia()

		} else { //Pg.isEvents() || Pg.isJobs

			//do nothing
		}	
	}

	//private
	function expandAboutUs() { $(".sidebar input:checkbox[id='About Us']").attr('checked', true); }
	function expandWork() { $(".sidebar input:checkbox[id='Work']").attr('checked', true); }
	function expandProjects() { $(".sidebar input:checkbox[id='Projects']").attr('checked', true); }
	function expandMedia() { $(".sidebar input:checkbox[id='Media']").attr('checked', true); }
	
	//api	
	return {
		
		reset: reset,
		expandAboutUs: expandAboutUs,
		expandWork: expandWork,
		expandProjects: expandProjects,
		expandMedia: expandMedia
	}

})(jQuery);