var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var os = require('os');

var server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  fs.readFile('index.html', (err, data) => {
    var result = ejs.render(data.toString(), {
        version:'0.1 - Get Hostname of node!',
        host: os.hostname()
    });
    res.end(result);
  });
});

server.listen(8080);
// superfluous edit