const d3 = require( 'd3' );
require( 'd3-selection-multi' );

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

class Board {
  constructor( rows ) {
    this.pieceBag = [];
    this.boardArray = new Array();
    for ( let i = 0; i < rows; i++ ) {
      this.boardArray[ i ] = new Array( 10 );
      this.boardArray[ i ].fill( 0 );
    }
  }

  createPieceBag () {
    while ( this.pieceBag.length < 7 ) {
      let piece = getRandomInt( 7 );
      if ( this.pieceBag.indexOf( piece ) === -1 ) {
        this.pieceBag.push( piece )
      }
    }
  }

}

gameBoard = new Board( 22 );
gameBoard.createPieceBag();

console.log( gameBoard.pieceBag );

// spawn locations
gameBoard.boardArray[0][3] = 1;
gameBoard.boardArray[0][4] = 1;
gameBoard.boardArray[0][5] = 1;
gameBoard.boardArray[1][3] = 1;
gameBoard.boardArray[1][4] = 1;
gameBoard.boardArray[1][5] = 1;
gameBoard.boardArray[1][6] = 1;


const rectWidth = 16;
const rectHeight = 16;

let svg = d3.select( 'svg' );
svg.attrs( { 'width' : 160, 'height' : 384 } );

let rows = svg.selectAll( '.row' )
              .data( function(){
                return gameBoard.boardArray.slice( 2 );
              } )
              .enter().append( 'g' )
              .attr("transform", function(d, i) {
                return "translate(0," + ( rectWidth * i ) + ")";
              });

let cells =     rows.selectAll( 'rect' )
                .data( function ( d, i ) { return d } )
                  .enter().append( 'rect' )
                  .attr( 'x', function( d, i ) { return rectWidth * i } )
                  .attr( 'fill', function( d, i ) {
                    let color;
                    if ( d === 0 ) {
                      color = 'darkslategray';
                    } else if ( d === 1 ) {
                      color = 'dodgerblue'
                    }
                    return color;
                  } )
                  .attrs( { 'stroke' : 'yellow','stroke-width' : 0.5, 'width' : rectWidth, 'height' : rectHeight } );











