const EventEmitter = require('events');

class Logger extends EventEmitter {
    logg(){
        console.log('in logger class');
        //raise an event
        this.emit('loggeremit',{id:1,name:'Ramu ummadishetty'});
    }
    
}

module.exports = Logger;