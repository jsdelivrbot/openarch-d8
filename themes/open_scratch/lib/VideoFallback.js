Test = (function($) {

	var $vids = $('.views-field-field-video-embed > .field-content > .video-embed-field-responsive-video')
	//var $vcnt = $vids.length
	//var $vid1 = $vids.eq(0)
	//var $vid2 = $vids.eq(1)

	var $btns = $('.video-src')
	var $vimeo = $('.video-src.vimeo')
	var $youku = $('.video-src.youku')

	// $btns[0].click(function() { select(0) })
	// $btns[1].click(function() { select(1) })
	$vimeo.click(function() { select(0) })
	$youku.click(function() { select(1) })

	

	$(document).ready(function() { 

		//hide youku by default
		$vids.eq(1).hide()

		// if (isBlocked($vids.eq(0))) {

		// 	if($vids.length > 1){
		// 		$vids.eq(0).hide()
		// 		$vids.eq(1).show()
		// 	}
		// }
	});

	// function isBlocked(vid) {
	// 	return $.contains(vid, $('#main-frame-error'))
	// }

	function select(btn_num) {

		if(btn_num == 1){ 
			$vids.eq(0).hide()
			$vids.eq(1).show()
			$vimeo.removeClass('active')
			$youku.addClass('active')
		}else{ 
			$vids.eq(1).hide()
			$vids.eq(0).show()
			$vimeo.addClass('active')
			$youku.removeClass('active')
		}
	}

	public_API = {
		select: select
	};

	return public_API


})(jQuery);