function comenzar() {

var boton=document.querySelector(".menu_items");
var sombra=document.querySelector(".menu_items--sombra");

boton.addEventListener("mousemove",eventoPrincipal,false);
boton.addEventListener("mouseout",eventoNormalizar,false);

function eventoPrincipal(e){
    //console.log(e.offsetX+" - "+e.offsetY);
    var maxWidth=e.target.clientWidth;
    var maxHeight=e.target.clientHeight;
    var valueX=e.offsetX;
    var valueY=e.offsetY;
    var ResultX=(-(18*100*valueY)/(50*maxHeight))+18;
    var ResultY=((18*100*valueX)/(50*maxWidth))-18;
    //console.log(ResultX+","+ResultY);
    boton.setAttribute("style", "transform: translate3d(0px, 0px, 40px) rotateX("+ResultX+"deg) rotateY("+ResultY+"deg);");
    var porcentaje=(valueX*100)/maxWidth;
    sombra.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) ${porcentaje}%, rgba(44,181,232,0) 100%);`);
}

function eventoNormalizar(){
    boton.setAttribute("style", "transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);");
    sombra.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) 50%, rgba(44,181,232,0) 100%);`);    
}
}

function cargar(){
    setTimeout(function (){
        let date=new comenzar;
    },4000);
}

cargar();