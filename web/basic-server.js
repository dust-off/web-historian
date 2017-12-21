var http = require('http');
var handler = require('./request-handler');
var initialize = require('./initialize.js');
var url = require('url');


// Why do you think we have this here?
// HINT: It has to do with what's in .gitignore
initialize('./azrchives');

var port = 8080;
var ip = '127.0.0.1';


var router = {
  //GET : function,
  //POST: other function
};

var server = http.createServer( function(req, res) {
  handler.handleRequest(req, res);
});


// var server = http.createServer(handler.handleRequest);
// console.log('loading');
if (module.parent) {
  module.exports = server;
} else {
  server.listen(port, ip);
  console.log('Listening on http://' + ip + ':' + port);
}

