$(document).ready(function(e) {
	var flag=false;
    $("#nav").click(function(e) {
        //console.log();
		if(!flag){
			$(this).css({"font-size":"40px","border-color":"none"}).val("x").blur().animate({
			
				top:"80px",
			
			},750,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
			deslizaBarra(true);
		}else{
			$(this).css({"font-size":"48px"}).val("=").blur().animate({
			
				top:"-12px",
			
			},500,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
			deslizaBarra(false);
			}
		flag=!flag;

	
    });
});

function deslizaBarra(flag){
	if(flag){
	$("#barranavegacion").animate({
			
				marginTop:"-50px",
			
			},750,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
	}else{
		$("#barranavegacion").animate({
			
				marginTop:"-145px",
			
			},500,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
		}
	}// JavaScript Document