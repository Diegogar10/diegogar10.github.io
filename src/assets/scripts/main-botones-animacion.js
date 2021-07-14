import BunttonsEfectsMain from '../lib/ButtonEfectsMain.js';
const comenzar = () => {
    return new Promise((resolve,reject)=>{
        const botones=document.querySelectorAll(".mainContent button");
        
        if(botones){
            resolve(botones); 
        }else {
            reject(new Error("Fallo el reconocimiento de propiedades de botones"));
        }
        
    });
}
class AnimarBotonesMain{
    constructor(){
        this.cargar();
    }
    async cargar(){
        this.elements = await comenzar();
        console.log(typeof(this.elements));
        this.intance = new BunttonsEfectsMain(this.elements);       
    }    
}


export default AnimarBotonesMain;

