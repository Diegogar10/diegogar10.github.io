   
   
    var botones=document.querySelectorAll(".menu_items");
    var sombras=document.querySelectorAll(".menu_items--sombra");
   

    botones.forEach(userItem => userItem.addEventListener("mousemove",eventoPrincipal1,false));
    

    //botones.addEventListener("mouseout",eventoNormalizar,false); 
    function eventoPrincipal1(e){
        let boton=e;
        console.log(e);
        
    }

    function eventoPrincipal(e){
        //console.log(e.offsetX+" - "+e.offsetY);
        //var boton= e.target.parentElement;
        console.log(e);
        //var maxWidth=boton.target.clientWidth;
        //var maxHeight=boton.target.clientHeight;
        //var valueX=boton.offsetX;
        //var valueY=boton.offsetY;
        //var ResultX=(-(18*100*valueY)/(50*maxHeight))+18;
        //var ResultY=((18*100*valueX)/(50*maxWidth))-18;
        //console.log(ResultX+","+ResultY);
        //boton.setAttribute("style", "transform: translate3d(0px, 0px, 40px) rotateX("+ResultX+"deg) rotateY("+ResultY+"deg);");
        var porcentaje=(valueX*100)/maxWidth;
        //sombra.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) ${porcentaje}%, rgba(44,181,232,0) 100%);`);
    }

    function eventoNormalizar(){
        boton.setAttribute("style", "transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);");
        sombra.setAttribute("style",`background: linear-gradient(140deg,,rgba(159,184,173,0) 0%, rgba(0,0,38,1) 50%,rgba(44,181,232,0) 100%);`);
    }
