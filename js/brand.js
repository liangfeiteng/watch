$(function(){
	$(".brand .header p").eq(0).on("tap",function(){
		window.history.go(-1);
	});
	$(".brand .header p").eq(1).on("tap",function(){
		window.history.go(-1);
	});
	$(".series .header p").eq(0).on("tap",function(){
		window.history.go(-1);
	});
	$(".series .header p").eq(1).on("tap",function(){
		window.history.go(-1);
	});
});