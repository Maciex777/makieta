//powiększenie pierwszego kafla po wejściu na stronę
$(document).ready(function(){ 
	$('.a1').toggleClass('col-xs-6 col-sm-4');			
	$('.a1').toggleClass('col-xs-12 col-sm-8');	
	$('.a1').children('.img-responsive').css("background-size", 100+"% " + 100 + "%");
	$('.a1').find('.img-foot').css("color", "silver");
	$('.a1').find('a').css("color", "white");
	$('.a1').find('a:link').css("color", "white");
	$('.a1').find('a:visited').css("color", "white");
	$('.a1').find('a:active').css("color", "white");
	$('.a1').find('a:hover').css("color", "white");
	$('.a1').children('.img-responsive').addClass('shadow');
	$('.a1').find('.foto').hide(1);	
	if($(window).width() > 960){
		$('.a1').find('h5').css("font-size", 15 + "px");
		$('.tile').not('.a1').css("font-size", 19 + "px");			
		$('.a1').css("font-size", 27 + "px");	
		$('.a1').find('.img-foot').css("padding","70px 150px 0 30px");
	} else {
		$('.a1').find('h5').css("font-size", 12 + "px");
		$('.tile').not('.a1').find('h5').css("font-size", 10 + "px");
		$('.tile').not('.a1').css("font-size", 12 + "px");
		$('.a1').css("font-size",18 + "px");	
		$('.a1').find('.img-foot').css("padding","45px 70px 0 30px");
	};
	$('.hiddenn').hide();
	$('.baza').css('display','none');
	$('.error').hide();
});

//akcja po kliknięciu na kafel
$(document).ready(function(){ 
	$(document).on('click','.tile', function(e){
	  var $link = $(e.target);
	  e.preventDefault();
	  if(!$link.data('lockedAt') || +new Date() - $link.data('lockedAt') > 300) {
		$(this).fadeTo('fast',1);
		$(this).toggleClass('col-xs-6 col-sm-4');			
		$(this).toggleClass('col-xs-12 col-sm-8');
		if($(this).hasClass('col-xs-12 col-sm-8')){	
			$(".tile").not(this).each(function() {
				if($(this).hasClass('col-xs-12 col-sm-8')){	
					$(this).children('.img-responsive').css("background-size", 100+"% " + 50 + "%");
					$(this).find('.img-foot').css("color", "grey");
					$(this).find('a').css("color", "#202020");
					$(this).find('a:link').css("color", "#202020");
					$(this).find('a:visited').css("color", "#202020");
					$(this).find('a:active').css("color", "black");
					$(this).find('a:hover').css("color", "black");
					curSize= parseInt($(this).css('font-size')) - 8;
					$(this).css('font-size', curSize);
					$(this).removeClass('col-xs-12 col-sm-8');
					$(this).addClass('col-xs-6 col-sm-4');
					$(this).children('.img-responsive').removeClass('shadow');
					$(this).find('.foto').show(1000);
					if($(window).width() > 960){
						$(this).find('.img-foot').css("padding","15px");
					} else {
						$(this).find('.img-foot').css("padding","15px");				
					}
				}				
			});
			$(this).children('.img-responsive').css("background-size", 100+"% " + 100 + "%");
			$(this).find('.img-foot').css("color", "silver");
			$(this).find('a').css("color", "white");
			$(this).find('a:link').css("color", "white");
			$(this).find('a:visited').css("color", "white");
			$(this).find('a:active').css("color", "white");
			$(this).find('a:hover').css("color", "white");
			curSize= parseInt($(this).css('font-size')) + 8;
			$(this).css('font-size', curSize);
			$(this).children('.img-responsive').addClass('shadow');
			$(this).find('.foto').hide(1);
			if($(window).width() > 960){
				$(this).find('.img-foot').css("padding","70px 150px 0 30px");
			} else {
				$(this).find('.img-foot').css("padding","35px 70px 0 30px");				
			}
		} else {
			$(this).children('.img-responsive').css("background-size", 100+"% " + 50 + "%");
			$(this).find('.img-foot').css("color", "grey");
			$(this).find('a').css("color", "#202020");
			$(this).find('a:link').css("color", "#202020");
			$(this).find('a:visited').css("color", "#202020");
			$(this).find('a:active').css("color", "black");
			$(this).find('a:hover').css("color", "black");
			curSize= parseInt($(this).css('font-size')) - 8;
			$(this).css('font-size', curSize);
			$(this).children('.img-responsive').removeClass('shadow');	
			$(this).find('.foto').show(1000);
			if($(window).width() > 960){
				$(this).find('.img-foot').css("padding","15px");
			} else {
				$(this).find('.img-foot').css("padding","15px");				
			}		
		}
	  }
      $link.data('lockedAt', +new Date());		
	});
});
