
class BunttonsEfects{

    constructor(myMap){
        this.myMap=myMap;
        this.regiterEvent();
    }
    
    regiterEvent(){
        this.myMap.forEach(this.logMapElements); 
    }
    
    logMapElements(value, key, map) {
        key.onmousemove = (e)=>mover(e);
        key.onmouseout = (e) =>normalizar(e);
    }
}

const mover = (boton) => {
    let maxWidth=boton.target.clientWidth;
    let maxHeight=boton.target.clientHeight;
    let valueX=boton.offsetX;
    let valueY=boton.offsetY;
    let ResultX=(-(18*100*valueY)/(50*maxHeight))+18;
    let ResultY=((18*100*valueX)/(50*maxWidth))-18;
    let item=boton.srcElement;
    let itemParent=boton.srcElement.parentElement;
    if(true){
        itemParent.setAttribute("style", "transform: translate3d(0px, 0px, 40px) rotateX("+ResultX+"deg) rotateY("+ResultY+"deg);");
    }
    let porcentaje=(valueX*100)/maxWidth;
    if(true){
        item.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) ${porcentaje}%, rgba(44,181,232,0) 100%);`);
    }
}

const normalizar = (boton)=>{
    let item=boton.srcElement;
    let itemParent=boton.srcElement.parentElement;
    itemParent.setAttribute("style", "transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);");
    item.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) 50%, rgba(44,181,232,0) 100%);`);    
}

export default BunttonsEfects;
