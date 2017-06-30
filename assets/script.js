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

//korekcja kaflów, które zostawiają pustą przestrzeń
$(document).ready(function(){ 
	$('.a3').click(function(){ 
		if($(window).width() > 752 && $('.a1').hasClass('col-xs-6 col-sm-4') && $('.a2').hasClass('col-xs-6 col-sm-4') && $('.a3').hasClass('col-xs-12 col-sm-8')){	
			$('.a2').insertAfter('.a3');
		} else {	
			$('.a3').insertAfter('.a2');
		}
	});	
	$('.a6').click(function(){ 
		if($(window).width() > 752 && $('.a4').hasClass('col-xs-6 col-sm-4') && $('.a5').hasClass('col-xs-6 col-sm-4') && $('.a6').hasClass('col-xs-12 col-sm-8')){	
			$('.a5').insertAfter('.a6');
		} else {	
			$('.a6').insertAfter('.a5');
		}
	});	
	
	$('.a2').click(function(){ 
		if($(window).width() < 752 && $('.a1').hasClass('col-xs-6 col-sm-4') && $('.a2').hasClass('col-xs-6 col-sm-4')){	
			$('.a1').insertAfter('.a2');
		} else {	
			$('.a2').insertAfter('.a1');
		}
	});	
	$('.a4').click(function(){ 
		if($(window).width() < 752 && $('.a1').hasClass('col-xs-6 col-sm-4') && $('.a2').hasClass('col-xs-6 col-sm-4') &&  $('.a3').hasClass('col-xs-6 col-sm-4') && $('.a4').hasClass('col-xs-6 col-sm-4')){	
			$('.a3').insertAfter('.a4');
		} else {	
			$('.a4').insertAfter('.a3');
		}
	});	
});

//odświeżanie strony przy zmianie wielkości okna
$(document).ready(function(){ 
	$(window).resize(function(){location.reload();});
});	

//dodawanie kafli po zjechaniu na sam dół strony
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        $('.hiddenn').appendTo('.row').show("slow"); 		   
    } 
	if ($(window).scrollTop() + $(window).height() == $(document).height()) {
	    $(window).scrollTop($(window).scrollTop()-19);
    }
});

//dodanie nowych kafli po naciśnięciu przycisku Add
$(document).ready(function(){ 
	$('.dodaj').click(function(){
		if($("input#name").val() != "" && $("input#subject").val() != "" && $("input#date").val() != ""){
			$('#message').css('visibility','visible');
			$(".row").append('<div class="tile nowy hiddenn col-xs-6 col-sm-4"><div class="img-responsive noweTlo" style="background-size:100% 50%;background-color:white;"><div class="img-foot text-left"><h5 class="termin">November 25, 2015</h5><a class="description" href="#" target="_blank">How to find design inspiration in the simple things around you</a></div><img class="foto" src="assets/images/user.png" alt="author"/></div></div>');
			//ustawienie wybranego obrazu jako tła kafla
			var $background = $('#blah').attr('src');
			$('.noweTlo').css({
				'background': 'url(' + $background + ') no-repeat center top',
				'background-size':'100% 50%',
				'background-color':'white',
				});		
			$( "div" ).removeClass( "noweTlo" );
			//określenie wielkości liter opisu w zależności od wielkości ekranu
			if($(window).width() > 960){
				$('.nowy').css("font-size", 19 + "px");	
			} else {
				$('.nowy').find('h5').css("font-size", 10 + "px");
				$('.nowy').css("font-size", 12 + "px");
			};
			$('.nowy').hide();
	
			//Ustawienie tekstu nowego kafla 
			var $subject = $( "#subject" ).val().match(/.{1,20}/g).join("<br/>");
			var $date = $( "#date" ).val();
			$('.description').html($subject);
		    $('.termin').html($date);
			$( "h5" ).removeClass( "termin" );
			$( "a" ).removeClass( "description" );
			
		//schowanie panelu i wyświetlenie potwierdzenia wypełnienia formularza oraz stworzenia nowego kafla	
		
   		  $('.description').html(subject);
		  $('.termin').html(date);
		  $('#contact_form').hide()
		  $('#message').html("<h2>Form Submitted!</h2>")
		  .append("<p>Your tile has been added.</p>")
		  .hide()
		  .fadeIn(1500)
		}
	});
});

//strzałka przekierowywująca na samą górę
var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('#myBtn').fadeIn('slow');
	} else {
		$('#myBtn').fadeOut('slow');
	}
});

//przekierowanie na górę po kliknięciu na strzałkę
$(document).on('click','#myBtn', function(){
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

//rozwinięcie bazy po kliknięciu na przycisk Add new tile
$(document).on('click','.rozwinBaze', function(){
	$('.baza').css('display','block')
	$('#contact_form').show();
	$('#message').css('visibility','hidden');
});

//zwinięcie bazy po kliknięciu na przycisk Finish
$(document).on('click','.zakoncz', function(){
	$('.baza').css('display','none')
});

//pobranie tekstu z pól formularza i wysłanie do nowych kafli
$(function() {
    $('.error').hide();
    $(".button").click(function() {
      // walidacja i przetworzenie formularza     
      $('.error').hide();
  	  var name = $("input#name").val();
  		if (name == "") {
        $("label#name_error").show();
        $("input#name").focus();
        return false;
      }
  		var subject = $("input#subject").val();
  		if (subject == "") {
        $("label#subject_error").show();
        $("input#subject").focus();
        return false;
      }
  		var date = $("input#date").val();
  		if (date == "") {
        $("label#date_error").show();
        $("input#date").focus();
        return false;
      }
      var dataString = 'name='+ name + '&subject=' + subject + '&date=' + date;	  
	  return false;
    });
});
