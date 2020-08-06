$(document).ready(function(e) {
	var flag=false;
    $("#barranavegacion input").click(function(e) {
        //console.log();
		if(!flag){
			$(this).css({"font-size":"40px","margin-top":"+=4","border-color":"none"}).val("x").blur();
			deslizaBarra(true);
		}else{
			$(this).css({"font-size":"48px","margin-top":"-=4"}).val("=").blur();
			deslizaBarra(false);
			}
		flag=!flag;
    });
});

function deslizaBarra(flag){
	if(flag){
	$("#barranavegacion").animate({
			
				marginTop:"-50px",
			
			},1500,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
	}else{
		$("#barranavegacion").animate({
			
				marginTop:"-315px",
			
			},1000,function(){//funcion anidada
				
				//$(".animacion h2").fadeIn(1000).delay(1000).fadeOut(1000);
				});
		}
	}// JavaScript Document