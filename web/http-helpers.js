var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};

exports.serveAssets = function(response, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  var uri = 'web/public/'; //url.parse(request.url).pathname
  var filename = path.join(process.cwd(), uri);

  var contentTypesByExtension = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript'
  };

  fs.exists(filename, function(exists) {
    if (!exists) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) {
      filename += '/index.html';
    }

    fs.readFile(filename, 'binary', function(err, file) {
      if (err) {        
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.write(err + '\n');
        response.end();
        return;
      }

      var headers = {};
      var contentType = contentTypesByExtension[path.extname(filename)];
      if (contentType) {
        headers['Content-Type'] = contentType;
      }
      response.writeHead(200, headers);
      response.write(file, 'binary');
      response.end();
    });
  });
};



// As you progress, keep thinking about what helper functions you can put here!
