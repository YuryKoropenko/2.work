$(document).ready(function(){

 $('.slide').slick({
	  	infinite: true,
	  	slidesToShow: 1,
	  	slidesToScroll: 1,
	  	dots: true,
	  	mobileFirst: true,
	  	autoplay: true,
	  	autoplaySpeed: 10000,
	});
});


$(document).ready(function(){
	$('.fade__search').on('click', function() {
		$(this).hide();
		$('.hidden-search__wrapper').animate({
			width: '184px'
		}, 500);
		return false;
	});
	/*
	$(".btn").magnificPopup();
	*/
	$('.phonemask-input').mask("+7 999 999-99-99");

	$('.p-fancybox').fancybox({
		padding : 0
	});
});


new WOW().init();



$(".tab_item").not(":first").hide();
$(".wrapper-tab .tab").click(function() {
	$(".wrapper-tab .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");