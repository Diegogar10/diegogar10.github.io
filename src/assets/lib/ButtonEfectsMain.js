
class BunttonsEfectsMain{

    constructor(object){
        this.myObject=object;
        this.regiterEvent();
    }
    
    regiterEvent(){
        this.myObject.forEach(this.logMapElements); 
    }
    
    logMapElements(value) {
        value.onmousemove = (e)=>mover(e);
        value.onmouseout = (e) =>normalizar(e); 
    }
}

const mover = (e) => {
    
    let maxWidth=e.target.clientWidth;
    let maxHeight=e.target.clientHeight;
    let valueX=e.offsetX;
    let valueY=e.offsetY;
    let ResultX=(-(18*100*valueY)/(50*maxHeight))+18;
    let ResultY=((18*100*valueX)/(50*maxWidth))-18;
    
    let item=e.srcElement;
    
    if(true){
        item.setAttribute("style", "transform: scale(1.05,1.05)"/*translate3d(0px, 0px, 40px)*/ +"rotateX("+ResultX+"deg) rotateY("+ResultY+"deg);");
        /* item.setAttribute("style", " transform: rotateX(30deg)"); */
    }
    
}

const normalizar = (e)=>{

    let item=e.srcElement;
    item.setAttribute("style", "transform: scale(1,1) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg);");
     
}

export default BunttonsEfectsMain;
