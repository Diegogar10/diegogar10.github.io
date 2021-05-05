    
const inicio = () => {
    const botonmenu = document.querySelector(".nav");
    botonmenu.onclick = ()=> efectoMenu(botonmenu);
} 
   
function efectoMenu(botonmenu){

    const menu=document.querySelector(".menu");
    const mainslogan=document.querySelector(".main-slogan");
    console.log(botonmenu.value);

    menu.classList.toggle("menu-desplegado1");
    mainslogan.classList.toggle("main-slogan--retraicted")

    let boton = botonmenu.value =='=';
    
    (boton)
        ? botonmenu.value = 'x'
        : botonmenu.value = '=';
}

inicio();