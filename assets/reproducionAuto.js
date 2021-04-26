import MediaPlayer from './apps/MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

let video = document.querySelector("#fondo");

const player = new MediaPlayer({el:video, plugins:[
    new AutoPlay()
]});




