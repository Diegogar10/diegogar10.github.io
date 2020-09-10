$(document).ready(function(e) {
	var flag=false;
    $(".nav").click(function(e) {
        
		if(!flag){
			$(this).css({"font-size":"40px","border-color":"none"}).val("x").blur().animate({
			
				
			
			},750,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
				/*$(".menu").css("width") */
			deslizaBarra1(true);
		}else{
			$(this).css({"font-size":"48px"}).val("=").blur().animate({
			
					
			},500,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});

				if(parseInt($(".menu").css("width"))>1000){
					deslizaBarra0(false);
				}else{
					deslizaBarra1(false);
				}
			}
		flag=!flag;

	
    });
});

function deslizaBarra1(flag){
	if(flag){
	$(".menu").animate({
			
				marginTop:"-50px",
			
			},750,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
	}else{
		$(".menu").animate({

				marginTop:"-230px",
			
			},500,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
		}
	}// JavaScript Document

function deslizaBarra0(flag){
	if(flag){
	$(".menu").animate({
			
				marginTop:"-50px",
			
			},750,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
	}else{
		$(".menu").animate({

				marginTop:"-145px",
			
			},500,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
		}
	}// JavaScript Document