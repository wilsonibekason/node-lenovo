const EventEmitter = require('events');

var url = 'http://myLogger.io/log';

class Logger extends EventEmitter {
  log(message) {
    // send an HTTP request
    console.log(message);

    // raise an Event
    this.emit("event", {id:1, url: 'http://'});
  }
}

const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.write('hello world')
    res.end();
  }
  if(res.url === '')
});
server.on('connetion', (socket) => {
  console.log('New connection')
})
server.listen(3000);
console.log("listening  on port 3000...")