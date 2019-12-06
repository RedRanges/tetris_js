"use strict";
const http = require( 'http' );
const fs = require( 'fs' );
const path = require( 'path' );

const server = http.createServer( ( req, res ) => {
  console.log( req.url );
  let filePath = '.' + req.url;
  if ( filePath  === './' ) {
    filePath = './index.html';
  }
  let extName = String( path.extname( filePath )).toLocaleLowerCase();
  const mimeTypes = {
    '.html' : 'text/html',
    '.css' : 'text/css',
    '.js' : 'text/javascript',
    '.ico' : 'image/x-icon',
    '.png' : 'image/png'
  };

  let contentType = mimeTypes[ extName ];
  fs.readFile( filePath, ( err, data ) => {

    if ( err ) {
      console.error( err );
    } else {
      res.writeHead( 200, { 'Content-Type' : contentType } );
      res.end( data );
    }
  } )
} );

server.listen( 3000 );