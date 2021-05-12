self.addEventListener('install', event=>{
    event.waitUntil(precache());
})

function precache(){
    const cache = await caches.open('V1');
    cache.addAll([
        
    ]);
}