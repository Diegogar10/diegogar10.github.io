import inicio from './scripts/header-menu-animacion.js';
import AnimacionBotones from './scripts/header-menu-botones.js';
import FondoRandomBotones from './scripts/main-services-botones.js';


inicio();

const animacion = new AnimacionBotones();

const fondoRandom = new FondoRandomBotones();
fondoRandom.setBackgroundImage();
