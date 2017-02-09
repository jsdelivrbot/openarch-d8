
Flexslider = (function($) {

	$(window).load(function() {

        total_width = 0;
        
        $('.slides > li').each(function() {
            total_width+=$(this).width();
        });

        avg_width = total_width / $('.slides > li').length;

		$('.flexslider').flexslider({
			itemWidth: avg_width,
		});
    });

})(jQuery);