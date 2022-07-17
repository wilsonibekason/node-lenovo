var x=;
var URL = 'https://shareme.com/login';
function log(message){
  console.log(message)
}
log(URL);

module.exports.URL = URL;
exports.URL = URL;
export = URL // bad practise reference to modules
const os  = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemen();

console.log("Total Memory: " + totalMemory)

//Template string
// ES6 / ES2015 : ecmascript 
console.log(`Total mEMORY : ${totalMemory}`);
console.log(`free memory : ${freeMemory}`);

//  FILE SYSTEM 
const fs = require("fs");
const files = fs.readdirSync('./');
console.log(files);
// asynchromous
fs.readdir('$', (err, files) => {
  if(err) console.log("error", err);
  else console.log("Result", files);
})

// if you change the error parameter of the readdif method you will get no such files or directory
// event is a signal that indicTES  THAT SOMETHING HAS HAPPENED 

// events in node

const EventEmitter = require('events');
const emitter = new   EventEmitter();
// the event should start an uppercase but a class
// class is containers for properties and function called methods
// register a listedner
emitter.on('messageLogged', (eventArg) => console.log('listener called', eventArg));

 emitter.emit('messageLogged', {id: 1, url: "http://"});

// raise logged : return loggin info


// exercise

function log(message) {
   console.log(message);
   emitter.emit('messageLogged', {id: 1, url: "http://"});

}

class Logger extends  EventEmitter {
  log(message) {
   console.log(message);
   emitter.emit('messageLogged', {id: 1, url: "http://"});
}
}

module.exports = Logger