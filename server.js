var eventEmitter = require('events').EventEmitter;
var counter = 0;
var em = new eventEmitter();

setTimeout(function (name) {
    console.log('Hello ' + name);
}, 3000, 'Shelley');

setInterval(function () {
    em.emit('contador', counter++);
}, 3000);

em.on('contador', function () {
    console.log("contador: " + counter);
});