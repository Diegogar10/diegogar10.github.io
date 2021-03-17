function load(){
    let botonmenu=document.querySelector(".nav");

    botonmenu.addEventListener("click",efectoMenu,false);
}

function efectoMenu(e){

    let menu=document.querySelector(".menu");
    let mainslogan=document.querySelector(".main-slogan");
    let boton=e.target;

    menu.classList.toggle("menu-desplegado1");
    mainslogan.classList.toggle("main-slogan--retraicted")

    if(boton.value =='=')boton.value ='x';
    else boton.value = '=';
    
}
window.onload=load;