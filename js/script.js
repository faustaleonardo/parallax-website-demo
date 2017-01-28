$(document).ready(function(){
	
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

	});

});