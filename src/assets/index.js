import inicio from './scripts/header-menu-animacion.js';
import AnimarBotonesMenu from './scripts/header-menu-botones.js';
import FondoRandomBotones from './scripts/main-services-botones.js';
import AnimarBotonesMain from './scripts/main-botones-animacion.js';

//---------------------
inicio();
//---------------------
const animacionMenu = new AnimarBotonesMenu();
//---------------------
const fondoRandom = new FondoRandomBotones();
fondoRandom.setBackgroundImage();
//---------------------
const animacionMain = new AnimarBotonesMain();
