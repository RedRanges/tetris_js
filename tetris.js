const d3 = require( 'd3' );
require( 'd3-selection-multi' );

const pieces = {
  1 : 'o piece',
  2 : 'l piece',
  3 : 'j piece',
  4 : 'l piece',
  5 : 's piece',
  6 : 'z piece',
  7 : 't piece'
}

const rectWidth = 16;
const rectHeight = 16;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

class PieceBag {
      constructor () {
        this.pieceBag = [];
        while ( this.pieceBag.length < 7 ) {
          let piece = getRandomInt( 7 );
          if ( this.pieceBag.indexOf( piece ) === -1 ) {
            this.pieceBag.push( piece )
          }
        }
      }  
}

class Board {
  constructor( rows ) {
    this.boardArray = new Array();
    for ( let i = 0; i < rows; i++ ) {
      this.boardArray[ i ] = new Array( 10 );
      this.boardArray[ i ].fill( 0 );
    }
  }
}

gameBoard = new Board( 22 );

currentPieceBag = new PieceBag();

console.log( currentPieceBag.pieceBag );

// spawn locations
// gameBoard.boardArray[0][3] = 1;
// gameBoard.boardArray[0][4] = 1;
// gameBoard.boardArray[0][5] = 1;
// gameBoard.boardArray[1][3] = 1;
// gameBoard.boardArray[1][4] = 1;
// gameBoard.boardArray[1][5] = 1;
// gameBoard.boardArray[1][6] = 1;

function spawnPiece() {
  // O piece
  if ( currentPieceBag.pieceBag[ 0 ] == 1 ) {
    gameBoard.boardArray[ 0 ][ 4 ] = 1;
    gameBoard.boardArray[ 0 ][ 5 ] = 1;
    gameBoard.boardArray[ 1 ][ 4 ] = 1;
    gameBoard.boardArray[ 1 ][ 5 ] = 1;
  } 
  // I piece
  else if  ( currentPieceBag.pieceBag[ 0 ] == 2 ) {
    gameBoard.boardArray[ 1 ][ 3 ] = 2;
    gameBoard.boardArray[ 1 ][ 4 ] = 2;
    gameBoard.boardArray[ 1 ][ 5 ] = 2;
    gameBoard.boardArray[ 1 ][ 6 ] = 2;
  } 
  // J piece
  else if  ( currentPieceBag.pieceBag[ 0 ] == 3 ) {
    gameBoard.boardArray[ 0 ][ 3 ] = 3;
    gameBoard.boardArray[ 1 ][ 3 ] = 3;
    gameBoard.boardArray[ 1 ][ 4 ] = 3;
    gameBoard.boardArray[ 1 ][ 5 ] = 3;
  } 
  // L piece
  else if  ( currentPieceBag.pieceBag[ 0 ] == 4 ) {
    gameBoard.boardArray[ 0 ][ 5 ] = 4;
    gameBoard.boardArray[ 1 ][ 3 ] = 4;
    gameBoard.boardArray[ 1 ][ 4 ] = 4;
    gameBoard.boardArray[ 1 ][ 5 ] = 4;
  } 
  // S piece
  else if  ( currentPieceBag.pieceBag[ 0 ] == 5 ) {
    gameBoard.boardArray[ 0 ][ 4 ] = 5;
    gameBoard.boardArray[ 0 ][ 5 ] = 5;
    gameBoard.boardArray[ 1 ][ 3 ] = 5;
    gameBoard.boardArray[ 1 ][ 4 ] = 5;
  } 
  // Z piece
  else if  ( currentPieceBag.pieceBag[ 0 ] == 6 ) {
    gameBoard.boardArray[ 0 ][ 3 ] = 6;
    gameBoard.boardArray[ 0 ][ 4 ] = 6;
    gameBoard.boardArray[ 1 ][ 4 ] = 6;
    gameBoard.boardArray[ 1 ][ 5 ] = 6;
  } 
  // T piece
  else if  ( currentPieceBag.pieceBag[ 0 ] == 7 ) {
    gameBoard.boardArray[ 0 ][ 4 ] = 7;
    gameBoard.boardArray[ 1 ][ 3 ] = 7;
    gameBoard.boardArray[ 1 ][ 4 ] = 7;
    gameBoard.boardArray[ 1 ][ 5 ] = 7;
  } 
}

spawnPiece();

// render tetris board
let svg = d3.select( 'svg' );
svg.attrs( { 'width' : 160, 'height' : 384 } );

let rows = svg.selectAll( '.row' )
              .data( function(){
                // hides spawning rows
                // return gameBoard.boardArray.slice( 2 );
                return gameBoard.boardArray;
              } )
              .enter().append( 'g' )
              .attr( "transform", function(d, i) {
                return "translate(0," + ( rectWidth * i ) + ")";
              } );

let cells = rows.selectAll( 'rect' )
            .data( function ( d, i ) { return d } )
              .enter().append( 'rect' )
              .attr( 'x', function( d, i ) { return rectWidth * i } )
              .attr( 'fill', function( d, i ) {
                let color;
                if ( d === 0 ) {
                  color = 'darkslategray';
                } else if ( d === 1 ) {
                  color = 'yellow';
                } else if ( d === 2 ) {
                  color = 'cyan';
                } else if ( d === 3 ) {
                  color = 'blue';
                } else if ( d === 4 ) {
                  color = 'orange';
                } else if ( d === 5 ) {
                  color = 'green';
                } else if ( d === 6 ) {
                  color = 'red';
                } else if ( d === 7 ) {
                  color = 'fuchsia';
                }
                return color;
              } )
              .attr( 'stroke', function( d, i ) {
                let color;
                if ( d === 0 ) {
                  color = 'yellow';
                } else {
                  color = 'black';
                }
                return color;
              } )

              .attrs( { 'stroke-width' : 0.5, 'width' : rectWidth, 'height' : rectHeight } );











