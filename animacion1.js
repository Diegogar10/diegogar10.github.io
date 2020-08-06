var video;
var menu;
function iniciar(){
video=document.getElementById("fondo");
reproducir();
}

function reproducir(){
	video.muted=true;	
	video.play();
}


window.addEventListener("load",iniciar,false);

