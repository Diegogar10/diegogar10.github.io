import BunttonsEfects from './lib/ButtonEfects.js';
const comenzar = () => {
    return new Promise((resolve,reject)=>{
        const botones=document.querySelectorAll(".menu_items");
        const sombras=document.querySelectorAll(".menu_items--sombra");
        
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

class FondoRandomBotones{
    
    constructor(){
        this.botones=document.querySelectorAll('.boton-random');
        /* this.fondos=['./assets/images/centralOP1.svg',
                    './assets/images/centralOP2.svg',
                    './assets/images/centralOP3.svg',
                    './assets/images/centralOP4.svg',
                    './assets/images/centralOP5.svg'
                    ];   */        
        this.fondos=['tipo1',
                    'tipo2',
                    'tipo3',
                    'tipo4',
                    'tipo5'
                    ];          
    }

    getImage(){
        return this.fondos[Math.floor(Math.random()*this.fondos.length)];
    }
    setBackgroundImage(url){
        this.botones.forEach((e)=>{
            /* e.style.background=`url('${url}') no-repeat center`;
            e.style.backgroundSize=`cover`; */
            e.classList.add(this.getImage());
            
        })
    }
}

const animacion = new AnimacionBotones();
const fondoRandom = new FondoRandomBotones();
//console.log(fondoRandom.getImage());
fondoRandom.setBackgroundImage();