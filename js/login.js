$(function(){
	//fastclick初始化
	$(function(){FastClick.attach(document.body);});
	//验证用户名
	$('.confirm').click(function(){
		var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;//邮箱
		var reg1 = /^1[3|4|5|7|8][0-9]\d{8}$/g;//手机号码
		var reg2 = /^[\u4e00-\u9fa5]+$/g;//用户名
		var reg3 = /^[A-Za-z_0-9]+$/g;//密码
		var flag = reg.test($('#email').val()) || reg1.test($('#email').val()) ||reg2.test($('#email').val());
		var flag1 = reg3.test($('#password').val());
		if(flag && flag1){
			$('.confirm a').attr("href","my.html");
			$('.confirm').blur();
		}else{
			$('.confirm a').attr("href","javascript:;");
			alert("您输入的账户名与密码不匹配");
			$('.confirm').focus();
		};	
	});
	//密码可见与隐藏设置
	var flag = true;
	$('#visible').siblings().click(function(){
		if(flag){
			$('#visible').siblings().removeClass('icon-mimakejian').addClass('icon-mimabukejian');
			$('#password').attr("type", "password");
			flag = false;
		}else{
			$('#visible').siblings().removeClass('icon-mimabukejian').addClass('icon-mimakejian');
			$('#password').attr("type", "text");
			flag = true;
		}
	});
	//选表部分
	$('.nav li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
	//购物车部分
	var n = 0;
	var p1 = 0;
	var p,i;
	//全选点击事件
	$('#lastInput').click(function(){
		if($('#lastInput').prop("checked")==false){
			n=0;
			p1=0;
			$('#acounts').html("￥"+p1);
		}else{
			p1 = 0;
			$('.price').each(function(){
				p1 += Number($(this).html().substring(1));
			});
			$('#acounts').html("￥"+p1);
		}
		$('.shopping-list input[type=checkbox]').prop('checked', $('#lastInput').prop('checked'));
	});
	//选项点击事件
	$('.shopping-list input[type=checkbox]').click(function(){
		i = $(this).parent().parent().parent().index();
		p = $('.price').eq(i).html();
		if($(this).prop('checked')){
			n++;
			p1 += Number(p.substring(1));
			$('#acounts').html("￥"+p1);
		}else{
			n--;
			p1 -= Number(p.substring(1));
			$('#acounts').html("￥"+p1);
		}
		$('#lastInput').prop('checked',n==$('input[type=checkbox]').length-1);
	});
});