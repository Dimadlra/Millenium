$(function(){
	$('.accordion_menu p, .selecting_city p, .price_scope p, .warranty_sel p, .financing_sel p, .selecting_more p, .selecting_more a').click(function(){
		if($(this).parent().children('ul').css('display') == 'none'){
			$(this).parent().children('ul').css('display', 'block');
		}
		else {
			$(this).parent().children('ul').css('display', 'none');
		}
	});
	$('.selecting_city ul>li, .price_scope ul>li, .selecting_more ul>li').click(function(){
		var seltext = $(this).children('a').text();
		$(this).parent().children('li').removeClass();
		$(this).parent().children('li').children('a').css('color', '#424242');
		$(this).addClass('cactive');
		$(this).parent().parent().children('p').text(seltext);
		$(this).parent().css('display', 'none');
	});
	$('.financing_sel ul>li, .warranty_sel ul>li').click(function(){
		var seltext = $(this).children('a').text();
		$(this).parent().children('li').removeClass();
		$(this).parent().children('li').children('a').css('color', '#424242');
		$(this).addClass('selactive');
		$(this).parent().parent().children('p').text(seltext);
		$(this).parent().css('display', 'none');
	});
	$("#ex6").slider();
	$("#ex6").on("slide", function(slideEvt) {
		$("#ex6SliderVal").text(slideEvt.value);
	});
	$("#ex5").slider();
	$("#ex5").on("slide", function(slideEvt) {
		$("#ex5SliderVal").text(slideEvt.value);
	});
	$(".select-1").select2({
		placeholder: "Search for a make, model, or body style"
	});
	$(".select-2").select2({
		placeholder: "All Makes"
	});
	$(".select-3").select2({
		placeholder: "Automatic"
	});
	$(".select-4").select2({
		placeholder: "Van"
	});
	$(".select-5").select2({
		placeholder: "All Models"
	});
	$(".select-6").select2({
		placeholder: "First name"
	});
	$(".select-7").select2({
		placeholder: "Last name"
	});
	$(".select-8").select2({
		placeholder: "Email"
	});
	$(".select-9").select2({
		placeholder: "Phone(optional)"
	});
	$('.filter').click(function(){
		$('.left-sidebar').animate({left: '0px'}, 200);
		$('.pop_bg').css('display', 'block');		
	});
	$('.pop_bg').click(function(){		
		$('.left-sidebar').animate({left: '-250px'}, 200);
		$('.pop_bg').css('display', 'none');
	});
	$('#primary-menu-trigger').click(function(){
		
		if($('.section_1, .section_2').css('display') == 'none'){
			if($('body').hasClass('primary-menu-open')){
				$('.primary-menu-open #header').css("cssText", "height: 100vh !important;");
				$('#header, #wrapper').css('position', 'fixed');
			}
			else {
				$('.gird_content').css('padding-top', '60px');
				$('#header').css("cssText", "height: 60px !important; background: #424242;");
				$('#wrapper').css('position', 'relative');
				
			}
		}
		else {
			if($('body').hasClass('primary-menu-open')){
				if($('header').hasClass('white_header')){
					$('.mobile_navigation').css('display', 'block');
					$('.primary-menu-open header').css("cssText", "height: 100vh !important; top: 0; background: white;");
				}
				$('header, #wrapper').css('position', 'fixed');
			}
			else {
				if($('header').hasClass('white_header')){
					$('.mobile_navigation').css('display', 'none');
					$('header').css("cssText", "height: 60px !important; background: rgba(255,255,255,0.7); top: 0;");
				}
				else {
					$('header').css('position', 'relative');
				}
				$('#wrapper').css('position', 'relative');
			}
		}
	});
	$('.selecting_city li, .price_scope li, .warranty_sel li, .financing_sel li, .selecting_more li').mouseover(function(){
		$(this).children('a').css('color', '#e14e4e');
	});
	$('.selecting_city li, .price_scope li, .selecting_more li').mouseout(function(){
		if($(this).hasClass("cactive")){
			console.log('ok');
			$(this).children('a').css('color', '#e14e4e');
		}
		else {
			$(this).children('a').css('color', '#424242');
		}
		
	});
	$('.warranty_sel li, .financing_sel li').mouseout(function(){
		if($(this).hasClass("selactive")){
			console.log('ok');
			$(this).children('a').css('color', '#e14e4e');
		}
		else {
			$(this).children('a').css('color', '#424242');
		}
		
	});
	$('.close_btn').click(function(){
		$('.notice_bar').css('display', 'none');
		$('header').css('top', '0');
	});
	if($('.notice_bar').css('display') == 'none'){
		$('header').css('top', '0');
	}
	
	$(window).resize(function(){
		var sec2_h= $('.section_2').height();
		$(window).scroll(function() {
			if($('.section_1, .section_2').css('display') == 'block'){
				//console.log($(window).scrollTop());
				if ($(this).scrollTop() >= sec2_h) { // this refers to window
			        $('.section_1, .section_2').css('display', 'none');
			        $('.page-content, .selecting_city, .selecting_more').css('margin-top', '0');
			        $('#header').css("cssText", "height: 60px !important; background: #424242;");
			        $('#header-wrap, #header-wrap>.container').css('height', '60px');
			        $('#logo img').css('height', '20px');
			        $('#primary-menu li a').css('padding-top', '20px');
			        $('.left-sidebar').css({position: 'fixed', top: '60px', bottom: '0'});
			        $('.topbar').css({position: 'fixed', top: '60px', right: '0'});
			        $('html, body').animate({
						scrollTop: $('#section_fixed_area').offset().top
					},0);
					$('.gird_content').css('padding-top', '65px');
			    }
			}
			else {
				if ($(this).scrollTop() <= 80) {
					$('#header').css({position: 'fixed', top: '0'});
					$('header').css('z-index', '102');
					//$('.primary-menu-open #header').css("cssText", "height: auto !important;");
					$('.gird_content').css('padding-top', '125px');
				}
			}	    
		});	
		//console.log($(window).width());
		if($(window).width() >= 768){
			$('.left-sidebar').css('left', '0');
		}
		else {
			$('.left-sidebar').css('left', '-255px');
		}
	});
	$(window).resize();


});