var greet = require('./greet');
greet();

//importacion parcial
var greet2 = require('./greet2').greet;
greet2();

// Acceso al metodo greet de la instancia de Greetr importada mediante la notacion del punto.
var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world';

var greet3b = require('./greet3');
greet3b.greet();

//Acceso a un contructor(clase sin instanciar)
var greet4 = new (require('./greet4'))();
greet4.greet();
greet4.greeting = 'Changed hello world';

var greet4b = new (require('./greet4'))();
greet4b.greet();
