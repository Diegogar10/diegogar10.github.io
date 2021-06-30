import BunttonsEfects from '../lib/ButtonEfects.js';
const comenzar = () => {
    return new Promise((resolve,reject)=>{
        const botones=document.querySelectorAll(".menu__items");
        const sombras=document.querySelectorAll(".items--sombras a");
        
        if(botones){
            const nodes={
                botones,sombras
            }
            resolve(nodes); 
        }else {
            reject(new Error("Fallo el reconocimiento de propiedades de botones"));
        }
        
    });
}
class AnimacionBotones{
    constructor(){
        this.myMap = new Map();
        this.cargar();
    }
    async cargar(){
        this.elements = await comenzar();
        this.elements.botones.forEach((boton,i)=>{
            this.myMap.set(boton,this.elements.sombras[i]);
        })
        this.intance = new BunttonsEfects(this.myMap);       
    }    
}


export default AnimacionBotones;

