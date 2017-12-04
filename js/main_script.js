$(function() {
	$('.menu-title').hover(function(){
		$(this).find('.sub-menu-wrapper').css('display' , 'flex');
	}, function(){
		$(this).find('.sub-menu-wrapper').hide();
	}
	);
});