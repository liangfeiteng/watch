/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-18 14:06:59
 * @version $Id$
 */
$(function(){
	$(".d4-li").on("click",function(){
		var i=parseInt($(this).children().html());
		$(this).children().html(i+1);
	});
	$(".det-4 p").on("click",function(){
		$(this).css({borderBottom:"5px solid #ae8350"}).siblings("p").css({borderBottom:"none"});
		$(this).next("div").css({display:"block"}).siblings("div").css({display:"none"});
	});
	var h=window.screen.availHeight;
	$(".s-main").css({height:h});
	$(".star").on("click",function(){
		$(".share").css({display:"block"});
		$(".share-1").css({display:"block"});
		$(".share-2").css({display:"block"});
	});
	$(".remove").on("click",function(){
		$(".share-1").css({display:"none"});
		$(".share-2").css({display:"none"});
		$(".share").css({display:"none"});
	});
})
