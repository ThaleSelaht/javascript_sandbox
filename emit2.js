var Emitter = require('events');

var emtr = new Emitter();

emtr.on('greet', function() {
    console.log('Somewhere, someone said Hello!');
});

emtr.on('greet', function() {
    console.log('A greeting ocurred!');
});

console.log('Hello!');

emtr.emit('greet');