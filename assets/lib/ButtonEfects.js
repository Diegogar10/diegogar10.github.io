
class BunttonsEfects{

    constructor(button){
        console.log(button);
    }
}

export default BunttonsEfects;

/* function eventoPrincipal(e){
   
    var maxWidth=e.target.clientWidth;
    var maxHeight=e.target.clientHeight;
    var valueX=e.offsetX;
    var valueY=e.offsetY;
    var ResultX=(-(18*100*valueY)/(50*maxHeight))+18;
    var ResultY=((18*100*valueX)/(50*maxWidth))-18;
    let item=e.srcElement;
    let itemParent=e.srcElement.parentElement;
    //console.log(ResultX+","+ResultY);
    if(true){
        itemParent.setAttribute("style", "transform: translate3d(0px, 0px, 40px) rotateX("+ResultX+"deg) rotateY("+ResultY+"deg);");
    }
    let porcentaje=(valueX*100)/maxWidth;
    if(true){
        item.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) ${porcentaje}%, rgba(44,181,232,0) 100%);`);
    }
}

function eventoNormalizar(e){
    let item=e.srcElement;
    let itemParent=e.srcElement.parentElement;
    itemParent.setAttribute("style", "transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);");
    item.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) 50%, rgba(44,181,232,0) 100%);`);    
} */