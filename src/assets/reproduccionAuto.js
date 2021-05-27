import MediaPlayer from './lib/MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

let video = document.querySelector("#fondo");

const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay()
]});

/*   if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js').catch(error=>{
        console.log(error.message);
    });
}  */
 

