
class BunttonsEfects{

    constructor(myMap){
        this.myMap=myMap;
        this.regiterEvent();
    }
    
    regiterEvent(){
        this.myMap.forEach(this.logMapElements); 
    }
    
    logMapElements(value, key, map) {
        value.onmousemove = (e)=>mover(e,key);
        value.onmouseout = (e) =>normalizar(e,key); 
    }
}

const mover = (e,key,) => {
    
    let maxWidth=e.target.clientWidth;
    let maxHeight=e.target.clientHeight;
    let valueX=e.offsetX;
    let valueY=e.offsetY;
    let ResultX=(-(18*100*valueY)/(50*maxHeight))+18;
    let ResultY=((18*100*valueX)/(50*maxWidth))-18;
    
    let item=e.srcElement.parentElement;
    let itemParent=key;
    
    if(true){
        itemParent.setAttribute("style", "transform: translate3d(0px, 0px, 40px) rotateX("+ResultX+"deg) rotateY("+ResultY+"deg);");
    }

    let porcentaje=(valueX*100)/maxWidth;
    
    if(true){
        item.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) ${porcentaje}%, rgba(44,181,232,0) 100%);`);
    }
    
}

const normalizar = (e, key)=>{

    let item=e.srcElement.parentElement;
    let itemParent=key;
    itemParent.setAttribute("style", "transform: translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);");
    item.setAttribute("style",`background: linear-gradient(140deg, rgba(159,184,173,0) 0%, rgba(0,0,38,1) 50%, rgba(44,181,232,0) 100%);`);    
}

export default BunttonsEfects;
