const EventEmitter = require('events');

const document = new EventEmitter();
const form = new EventEmitter();
const button = new EventEmitter();

button.on('click', () => {
    console.log("Button clicked");
    form.emit('click');
});

form.on('click', () => {
    console.log("Form event triggered");
    document.emit('click');
});


document.on('click', () => {
    console.log("Document event triggered");
});


button.emit('click');