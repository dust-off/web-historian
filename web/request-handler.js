var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var fs = require('fs');
var url = require('url');
var helpers = require('./http-helpers');

exports.handleRequest = function (req, response) {
  
  //
  
  
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === 'GET' && (req.url === '/') || (req.url === '/styles.css')) {
    // handler.handleRequest(req, res);
    helpers.serveAssets(response);
  // } else if (req.method === 'GET') { //&& req.url === anythingelse
  //   console.log('then we look up the URL in our archives')
    //then look up that other thing using the archive helpers
    //if a page is found in the archives then it calls the serveASSETS with the path
  } else if (req.method === 'POST') {
    //then look up the post in our archives
      //if it's archived then return that page
      //else show the 'loading' page and que up the url for download
  }
  
  //when request includes a url then look it up in our archives by key


  // // console.log('aa');
  // response.writeHead('[Content-type]', 'text/plain');
  // // response.write
  // response.end(archive.paths.list);
  

  
  // var assetData = {name: assetname, type: 'siteAsset'};
  // console.log(assetData);
  // if (request.method === 'GET') {
  //   request.method = url.filePath(request.url);
  // } else {
  //   var request = response.writeHead('[Content-type]', 'text/html');
  // }
  // // if (request.method === )
  // // if (request.method === 'POST') {
  // //   request.filePath = url.filePath(request.url);
  // // } else {
  // //   utils.writeHead(200, ['Content-type']);
  // // }
};
