const EventEmitter = require('events');
const emitter = new EventEmitter();

//event listener
emitter.on('messageLogged',function(){
    console.log('listener called..');
});

//raise event
emitter.emit('messageLogged');

emitter.on('arguments',(arg) => {
    console.log(arg);
});

//emitter raised with arguments
emitter.emit('arguments',{id:1,url:'https://tewiki.iiit.ac.in'});


const Logger = require('./logger');
const logger = new Logger();

logger.on('loggeremit',(args)=>{
    console.log('from logger module listener ',args);
});

//calling the logg function and raising the event 
logger.logg();
