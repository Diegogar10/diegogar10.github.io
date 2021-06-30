import inicio from './scripts/header-menu-animacion.js';
import AnimacionBotones from './scripts/header-menu-botones.js';

inicio();
const animacion = new AnimacionBotones();

class FondoRandomBotones{
    
    constructor(){
        this.botones=document.querySelectorAll('.boton-random');        
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
    setBackgroundImage(){
        this.botones.forEach((e)=>{
            e.classList.add(this.getImage());
            
        })
    }
}