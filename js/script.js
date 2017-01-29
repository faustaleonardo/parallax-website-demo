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

		// when the element is beginning to appear from bottom
		if (wScroll > $('.large-window').offset().top - $(window).height()){
			// this is only for better body of image coming first
			$('.large-window').css({'background-position' : 'center ' + (wScroll - $('.large-window').offset().top) + 'px'});

			// opacity becoming higher when user scrolls more down
			// to get value between 0-1
			// 400 and /5 are used to make the element range between 0.9-0.1 (two digits)
			var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

			$('.window-tint').css({'opacity' : opacity});
		}

	});



});