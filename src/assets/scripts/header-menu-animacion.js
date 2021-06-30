const inicio = () => {
    const botonmenu = document.querySelector(".menu__button");
    botonmenu.onclick = ()=> efectoMenu(botonmenu);
} 
   
function efectoMenu(botonmenu){

    const menu=document.querySelector(".menu");
    const mainslogan=document.querySelector(".mainContent__slogan");
    console.log(botonmenu.value);

    menu.classList.toggle("menu--desplegado");
    mainslogan.classList.toggle("mainContent__slogan--retraido")

    let boton = botonmenu.value =='=';
    
    (boton)
        ? botonmenu.value = 'x'
        : botonmenu.value = '=';
}

export default inicio;