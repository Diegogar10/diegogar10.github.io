class FondoRandomBotones{
    
    constructor(){
        this.botones=document.querySelectorAll('.button--random');        
        this.fondos=['tipo1',
                    'tipo2',
                    'tipo3',
                    'tipo4',
                    'tipo5'
                    ];          
    }

    setBackgroundImage(){
        this.botones.forEach((e)=>{
            e.classList.add(this.getImage());
            })
    }

    getImage(){
        return this.fondos[Math.floor(Math.random()*this.fondos.length)];
    }
    
}

export default FondoRandomBotones;