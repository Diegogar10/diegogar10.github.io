const VERSION = "v2"

self.addEventListener('install', event=>{
        event.waitUntil(precache());
});

self.addEventListener('fetch',event=>{
    const request = event.request;
    //get
    if(request.method !=="GET"){
        return;
    }
    //buscar en cache
    event.respondWith(cachedResponse(request));

    //actualizar el cache
    //event.waitUntil(updateCache(request));
}); 

async function precache(){
    const cache = await caches.open(VERSION);
    return cache.addAll([
        
        './',
        './index.html',
        './assets/animationButtons.js',
        './assets/reproduccionAuto.js', 
        './assets/font/Anurati.otf',
        './assets/images/botonabajo.svg',
        './assets/images/centralOP1.svg',
        './assets/images/centralOP2.svg',
        './assets/images/centralOP3.svg',
        './assets/images/centralOP4.svg',
        './assets/images/centralOP5.svg',
        './assets/images/centros.svg',
        './assets/images/cuadricula.png',
        './assets/images/logo.png',
        /*
        './assets/images/RectanguloLatera.svg', 
        */
        
       './assets/lib/ButtonEfects.js',
        './assets/lib/MediaPlayer.js',
        './assets/plugins/AutoPlay.js',
        './assets/videos/videofondo.mp4',
        './assets/videos/videofondo.mov',
        './styles/desktop_mainStyles.css',
        './styles/desktop_menu_animacion.css',
        './styles/desktop_menu_buttons.css',
        './styles/desktop_styles_menu.css',
        './styles/mobile_menu_buttons.css', 
        './assets/animacionV2.js', 
        './styles/mobile_style_menu.css' 
    ]);
}

 async function cachedResponse(request){
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}  
 async function updateCache(request){
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
 }