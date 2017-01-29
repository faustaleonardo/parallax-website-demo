$(document).ready(function(){


	// to animate figcaption. This can be done if using sass(nested)
	$('.clothes-pics figure').hover(function(){
		    $(this).find('figcaption').css('left', '0%');
		    $(this).find('img').css('transform', 'scale(1.1)');
	    }, function(){
	    	$(this).find('figcaption').css('left', '-100%');
		    $(this).find('img').css('transform', 'scale(1)');
	});

	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();

		// translate(speedToGoHorizontal, speedToGoVertical)

		// + to make them going down
		$('.logo').css({
			'transform': 'translate(0px, ' + wScroll/2 + '%)'
		});
		$('.back-bird').css({
			'transform': 'translate(0px, ' + wScroll/4 + '%)'
		});
		// - to make it going up 
		$('.fore-bird').css({
			'transform': 'translate(0px, -' + wScroll/40 + '%)'
		});

		// to decide when to display the animation
		if (wScroll > ($('.clothes-pics').offset().top - $(window).height() / 1.2)){

			// i starts with 0
			$('.clothes-pics figure').each(function(i){
				setTimeout(function(){
					// eq means index
					$('.clothes-pics figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));
			});

		}

	});



});