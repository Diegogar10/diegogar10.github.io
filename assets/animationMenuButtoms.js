/* var boton;
var sombra;
var botones;
var sombras; */

const comenzar = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            const boton=document.querySelector(".menu_items");
            const botones=document.querySelectorAll(".menu_items");
            const sombra=document.querySelector(".menu_items--sombra");
            const sombras=document.querySelectorAll(".menu_items--sombra");
            const obj={
                boton,botones,sombra,sombras
            }
            
            resolve(obj); 
        
        }else {
            reject(new Error("Fallo el reconocimiento de propiedades de botones"));
        }
        
    });
/* boton.addEventListener("mousemove",eventoPrincipal,false);
boton.addEventListener("mouseout",eventoNormalizar,false); */


function eventoPrincipal(e){
    //console.log(e.offsetX+" - "+e.offsetY);
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
}
}

const cargar = async () => {
        
    const incializar = await comenzar();
    
    /* botones.forEach(function(item){
    item.addEventListener("mousemove",eventoPrincipal,false);
    item.addEventListener("mouseout",eventoNormalizar,false);
    }); */

    //console.log(incializar.botones);

    Array.prototype.forEach.call(incializar.botones, button => {
        button.onmouseover = () => alert('Nunca pares de aprender!');
      }); 

}

cargar();