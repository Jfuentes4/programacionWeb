//Uso de el modulo events para realizar eventos

let emitter = require('events');
//Uso de archivo de configuracion para establecer literales y cariables predefinidas
let eventConfig = require('./config').events;

let emtr = new emitter();

emtr.on(eventConfig.GREET, () => {
    console.log('somewhere, someone said hello');
});

emtr.on(eventConfig.GREET, () => {
    console.log('A greeting occurred!');
});

console.log('Hello');
emtr.emit(eventConfig.GREET);