const d3 = require( 'd3' );
require( 'd3-selection-multi' );

let svg = d3.select( 'svg' );
svg.attrs( { 'width' : 160, 'height' : 384 } );

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



class Piece {

  constructor( piece ) {
    console.log( piece );
    this.pieceType = piece;
    if ( piece === 1 ) {
      this.sq1 = [ 0, 4 ];
      this.sq2 = [ 0, 5 ];
      this.sq3 = [ 1, 4 ];
      this.sq4 = [ 1, 5 ];
    } else if ( piece === 2 ) {
      this.sq1 = [ 1, 3 ];
      this.sq2 = [ 1, 4 ];
      this.sq3 = [ 1, 5 ];
      this.sq4 = [ 1, 6 ];
    } else if ( piece === 3 ) {
      this.sq1 = [ 0, 3 ];
      this.sq2 = [ 1, 3 ];
      this.sq3 = [ 1, 4 ];
      this.sq4 = [ 1, 5 ];
    } else if ( piece === 4 ) {
      this.sq1 = [ 0, 5 ];
      this.sq2 = [ 1, 3 ];
      this.sq3 = [ 1, 4 ];
      this.sq4 = [ 1, 5 ];
    } else if ( piece === 5 ) {
      this.sq1 = [ 0, 4 ];
      this.sq2 = [ 0, 5 ];
      this.sq3 = [ 1, 3 ];
      this.sq4 = [ 1, 4 ];
    } else if ( piece === 6 ) {
      this.sq1 = [ 0, 3 ];
      this.sq2 = [ 0, 4 ];
      this.sq3 = [ 1, 4 ];
      this.sq4 = [ 1, 5 ];
    } else if ( piece === 7 ) {
      this.sq1 = [ 0, 4 ];
      this.sq2 = [ 1, 3 ];
      this.sq3 = [ 1, 4 ];
      this.sq4 = [ 1, 5 ];
    } else {
      console.error( 'idk what piece this is.');
    }
    // gameBoard.boardArray[ this.sq1[ 0 ] ] [this.sq1[ 1 ] ] = this.pieceType;
    // gameBoard.boardArray[ this.sq2[ 0 ] ] [this.sq2[ 1 ] ] = this.pieceType;
    // gameBoard.boardArray[ this.sq3[ 0 ] ] [this.sq3[ 1 ] ] = this.pieceType;
    // gameBoard.boardArray[ this.sq4[ 0 ] ] [this.sq4[ 1 ] ] = this.pieceType;

  }

  // erase() {
  //   gameBaord.boardArray[ this.sq1[ 0 ] ] [this.sq1[ 1 ] ] = 0;
  //   gameBoard.boardArray[ this.sq2[ 0 ] ] [this.sq2[ 1 ] ] = 0;
  //   gameBoard.boardArray[ this.sq3[ 0 ] ] [this.sq3[ 1 ] ] = 0;
  //   gameBoard.boardArray[ this.sq4[ 0 ] ] [this.sq4[ 1 ] ] = 0;

  // }

  fall() {
    this.sq1[ 0 ] +=1;
    this.sq2[ 0 ] +=1;
    this.sq3[ 0 ] +=1;
    this.sq4[ 0 ] +=1;
    
    // gameBoard.boardArray[ this.sq1[ 0 ] ] [this.sq1[ 1 ] ] = this.pieceType;
    // gameBoard.boardArray[ this.sq2[ 0 ] ] [this.sq2[ 1 ] ] = this.pieceType;
    // gameBoard.boardArray[ this.sq3[ 0 ] ] [this.sq3[ 1 ] ] = this.pieceType;
    // gameBoard.boardArray[ this.sq4[ 0 ] ] [this.sq4[ 1 ] ] = this.pieceType;

    update();
  }

  rotate() {

  }
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

  spawnPiece( piece ) {
    this.myPiece = new Piece( piece );
    this.boardArray[ this.myPiece.sq1[ 0 ] ] [this.myPiece.sq1[ 1 ] ] = this.myPiece.pieceType;
    this.boardArray[ this.myPiece.sq2[ 0 ] ] [this.myPiece.sq2[ 1 ] ] = this.myPiece.pieceType;
    this.boardArray[ this.myPiece.sq3[ 0 ] ] [this.myPiece.sq3[ 1 ] ] = this.myPiece.pieceType;
    this.boardArray[ this.myPiece.sq4[ 0 ] ] [this.myPiece.sq4[ 1 ] ] = this.myPiece.pieceType;
    update();
  }



  fallPiece() {
    this.boardArray[ this.myPiece.sq1[ 0 ] ] [this.myPiece.sq1[ 1 ] ] = 0;
    this.boardArray[ this.myPiece.sq2[ 0 ] ] [this.myPiece.sq2[ 1 ] ] = 0;
    this.boardArray[ this.myPiece.sq3[ 0 ] ] [this.myPiece.sq3[ 1 ] ] = 0;
    this.boardArray[ this.myPiece.sq4[ 0 ] ] [this.myPiece.sq4[ 1 ] ] = 0;

    this.myPiece.fall();
    this.boardArray[ this.myPiece.sq1[ 0 ] ] [this.myPiece.sq1[ 1 ] ] = this.myPiece.pieceType;
    this.boardArray[ this.myPiece.sq2[ 0 ] ] [this.myPiece.sq2[ 1 ] ] = this.myPiece.pieceType;
    this.boardArray[ this.myPiece.sq3[ 0 ] ] [this.myPiece.sq3[ 1 ] ] = this.myPiece.pieceType;
    this.boardArray[ this.myPiece.sq4[ 0 ] ] [this.myPiece.sq4[ 1 ] ] = this.myPiece.pieceType;
    update();

  }


}

gameBoard = new Board( 22 );

currentPieceBag = new PieceBag();


gameBoard.spawnPiece( currentPieceBag.pieceBag[ 0 ] );

setInterval( function() {
  gameBoard.fallPiece();
}, 500 );





// render tetris board

function update() {
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
  }

// update();


// setInterval( function () {
  
//   update();
// }, 1000 );








