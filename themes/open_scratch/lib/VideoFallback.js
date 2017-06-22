(function($) {

	var $vids = $('.views-field-field-video-embed > .field-content > .video-embed-field-responsive-video')
	//var $vcnt = $vids.length
	// var $vid1 = $vids.eq(0)
	//var $vid2 = $vids.eq(1)

	$(document).ready(function() { 

		$vids.eq(1).hide()

		if (isBlocked($vids.eq(0))) {

			if($vids.length > 1){
				$vids.eq(0).hide()
				$vids.eq(1).show()
			}
		}

	});

	function isBlocked(vid) {
		return $.contains(vid, $('#main-frame-error'))
	}


})(jQuery);