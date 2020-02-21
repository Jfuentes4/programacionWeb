let emitter = require('./Emitter');
let emtr = new emitter();

emtr.on('greet', () => {
    console.log('somewhere, someone said hello');
});

emtr.on('greet', () => {
    console.log('A greeting occurred!');
});

console.log('Hello');
emtr.emit('greet');