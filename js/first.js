$(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    pagination : '.swiper-pagination'
 	 });
	setTimeout(function(){
		$(".mask").css({
			opacity:0
		});
	},2000);
	setTimeout(function(){
		$(".mask").css({
			display:"none"
		});
	},5000);
});