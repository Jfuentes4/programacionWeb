// function statement
/*function greet () {
    console.log('hi');
}

greet();*/


let greet2 = () => {
    console.log(`hi`);
}

greet2();

// functions are first-class
let logGreeting = (fn) => {
    fn();
}
logGreeting(greet2);

let greet3 = (() => {console.log(`hi`)});
greet3();

(() => {console.log(`hi`)})();
