const EventEmitter = require('events');
const uuid = require('uuid'); // creates universal format of id:
// console.log(uuid.v4());


class Logger extends EventEmitter {
    log(msg) {
    // Call event
    this.emit('message', {id : uuid.v4(), msg});
    }
}

module.exports = Logger;