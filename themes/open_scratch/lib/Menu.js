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
			|| Pg.isProjGallery()) {

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
	function expandAboutUs() { $("input:checkbox[id='About Us']").attr('checked', true); }
	function expandWork() { $("input:checkbox[id='Work']").attr('checked', true); }
	function expandProjects() { $("input:checkbox[id='Projects']").attr('checked', true); }
	function expandMedia() { $("input:checkbox[id='Media']").attr('checked', true); }
	
	//api	
	return {
		
		reset: reset,
		expandAboutUs: expandAboutUs,
		expandWork: expandWork,
		expandProjects: expandProjects,
		expandMedia: expandMedia
	}

})(jQuery);