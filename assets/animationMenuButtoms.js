import BunttonsEfects from './lib/ButtonEfects.js';

const comenzar = () => {
    return new Promise((resolve,reject)=>{
        const botones=document.querySelectorAll(".menu_items");
        const sombras=document.querySelectorAll(".menu_items--sombra");
        const myMap=new Map();
        if(botones){
            botones.forEach((boton,i)=>{
                myMap.set(boton,sombras[i]);
              }) 
            resolve(myMap); 
        }else {
            reject(new Error("Fallo el reconocimiento de propiedades de botones"));
        }
    });
}



function logMapElements(value, key, map) {

    //console.log(key.clientWidth);
    
    //key.onmouseover = () =>;
    key.onmouseout = () => console.log('Gracias2!');
}

const cargar = async () => {

    const incializar = await comenzar();
    incializar.forEach(logMapElements);

}
cargar();
