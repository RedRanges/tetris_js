const d3 = require( 'd3' );
require( 'd3-selection-multi' );

let svg = d3.select( 'svg' );
svg.attrs( { 'width' : 160, 'height' : 384 } );

const rectWidth = 16;
const rectHeight = 16;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1;
}

document.addEventListener( 'keypress', function ( event ) {
  gameBoard.movePiece( event.key );
} );
class Piece {

  constructor( piece ) {
    this.pieceType = piece;
    this.piecePlaced = false;
    this.pos = 0;
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
  }

  fall() {
    this.sq1[ 0 ] +=1;
    this.sq2[ 0 ] +=1;
    this.sq3[ 0 ] +=1;
    this.sq4[ 0 ] +=1;
  }

  rotate() {
    if ( this.pieceType === 1 ) {
      return
    } else if ( this.pieceType === 2 ) {
      if ( this.pos === 0 ) {
        this.sq4[ 1 ] -=1;
        this.sq4[ 0 ] +=2;
        this.sq3[ 0 ] +=1;
        this.sq2[ 1 ] +=1;
        this.sq1[ 1 ] +=2;
        this.sq1[ 0 ] -=1;
        this.pos = 1;
      } else if ( this.pos === 1 ) {
        this.sq4[ 1 ] +=1;
        this.sq4[ 0 ] -=2;
        this.sq3[ 0 ] -=1;
        this.sq2[ 1 ] -=1;
        this.sq1[ 1 ] -=2;
        this.sq1[ 0 ] +=1;
        this.pos = 0;
      }
    } else if ( this.pieceType === 3 ) {

      if( this.pos === 0 ) {   
        this.sq4[ 1 ] -=1;
        this.sq3[ 0 ] -=1;
        this.sq2[ 0 ] -=2;
        this.sq2[ 1 ] +=1;
        this.sq1[ 0 ] -=1;
        this.sq1[ 1 ] +=2; 
        this.pos = 1;
      } else if ( this.pos === 1 ) {
        this.sq4[ 1 ] +=1;
        this.sq3[ 1 ] +=1;
        this.sq2[ 0 ] +=1;
        this.sq1[ 0 ] +=1;
        this.sq1[ 1 ] -=2;
        this.pos = 2;
      } else if ( this.pos === 2 ) {
        this.sq4[ 1 ] -=2;
        this.sq3[ 0 ] +=1;
        this.sq3[ 1 ] -=1;
        this.sq1[ 0 ] -=1;
        this.sq1[ 1 ] +=1;
        this.pos = 3;
      } else if ( this.pos === 3 ) {
        this.sq4[ 1 ] +=2;
        this.sq2[ 0 ] +=1;
        this.sq2[ 1 ] -=1;
        this.sq1[ 0 ] +=1;
        this.sq1[ 1 ] -=1;
        this.pos = 0;
      }
    } else if ( this.pieceType === 4 ) {
      if ( this.pos === 0 ) {
        this.sq4[ 1 ] -=1;
        this.sq3[ 0 ] -=1;
        this.sq2[ 1 ] +=1;
        this.sq2[ 0 ] -=2;
        this.sq1[ 0 ] +=1;
        this.pos = 1;
      } else if ( this.pos === 1 ) {
        this.sq4[ 1 ] -=1;
        this.sq3[ 1 ] -=1;
        this.sq2[ 0 ] +=1;
        this.sq1[ 0 ] -=1;
        this.pos = 2;
      } else if ( this.pos === 2 ) {
        this.sq4[ 1 ] +=1;
        this.sq3 [ 1 ] +=1;
        this.sq2[ 0 ] -=1;
        this.sq1[ 1 ] -=2;
        this.sq1[ 0 ] -=1;
        this.pos = 3;
      } else if ( this.pos === 3 ) {
        this.sq4[ 1 ] +=1;
        this.sq3[ 0 ] +=1;
        this.sq2[ 1 ] -=1;
        this.sq2[ 0 ] +=2;
        this.sq1[ 1 ] +=2;
        this.sq1[ 0 ] +=1;
        this.pos = 0;
      }
    } else if ( this.pieceType === 5 ) {
      if ( this.pos === 0 ){
        this.sq3[ 1 ] +=1;
        this.sq3[ 0 ] -=1;
        this.sq2[ 1 ] -=2;
        this.sq1[ 1 ] -=1;
        this.sq1[ 0 ] -=1;
        this.pos = 1;
      } else if ( this.pos === 1 ) {
        this.sq3[ 1 ] -=1;
        this.sq3[ 0 ] +=1;
        this.sq2[ 1 ] +=2;
        this.sq1[ 1 ] +=1;
        this.sq1[ 0 ] +=1;
        this.pos = 0;
      }
    } else if ( this.pieceType === 6 ) {
      if ( this.pos === 0 ) {
        this.sq4[ 1 ] -=1;
        this.sq3[ 0 ] -=1;
        this.sq2[ 1 ] +=1;
        this.sq1[ 1 ] +=2;
        this.sq1[ 0 ] -=1;
        this.pos = 1;
      } else if ( this.pos === 1 ) {
        this.sq4[ 1 ] +=1;
        this.sq3[ 0 ] +=1;
        this.sq2[ 1 ] -=1;
        this.sq1[ 1 ] -=2;
        this.sq1[ 0 ] +=1;
        this.pos = 0;
      }
    } else if ( this.pieceType === 7 ) {
     if( this.pos === 0 ) {
       this.sq4[ 1 ] -=1;
       this.sq3[ 0 ] -=1;
       this.sq2[ 1 ] +=1;
       this.sq2[ 0 ] -=2;
       this.sq1[ 1 ] +=1;
       this.pos = 1;
     } else if ( this.pos === 1 ) {
       this.sq3 [ 1 ] +=1;
       this.sq2[ 0 ] +=1;
       this.sq1[ 1 ] -=2;
       this.pos = 2;
     } else if ( this.pos === 2 ) {
       this.sq3[ 1 ] -=1;
       this.sq3[ 0 ] -=1;
       this.pos = 3;
     } else if ( this.pos === 3 ) {
       this.sq4[ 1 ] +=1;
       this.sq3[ 0 ] +=2;
       this.sq2[ 1 ] -=1;
       this.sq2[ 0 ] +=1;
       this.sq1[ 1 ] +=1;
       this.pos = 0;
     }
    }
    
  }

  moveLeft() {
    if ( this.sq1[ 1 ] > 0 && this.sq2[ 1 ] > 0  && this.sq3[ 1 ] > 0 && this.sq4[ 1 ] > 0 ) {
      this.sq1[ 1 ] -=1;
      this.sq2[ 1 ] -=1;
      this.sq3[ 1 ] -=1;
      this.sq4[ 1 ] -=1;
    }
  }

  moveRight() {
    if ( this.sq1[ 1 ] < 9 && this.sq2[ 1 ] < 9  && this.sq3[ 1 ] < 9 && this.sq4[ 1 ] < 9 ) {
      this.sq1[ 1 ] +=1;
      this.sq2[ 1 ] +=1;
      this.sq3[ 1 ] +=1;
      this.sq4[ 1 ] +=1;
    }
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
    this.addPieceToBoard();
  }

  erasePiece() {
    this.boardArray[ this.myPiece.sq1[ 0 ] ] [this.myPiece.sq1[ 1 ] ] = 0;
    this.boardArray[ this.myPiece.sq2[ 0 ] ] [this.myPiece.sq2[ 1 ] ] = 0;
    this.boardArray[ this.myPiece.sq3[ 0 ] ] [this.myPiece.sq3[ 1 ] ] = 0;
    this.boardArray[ this.myPiece.sq4[ 0 ] ] [this.myPiece.sq4[ 1 ] ] = 0;
  }

  fallPiece() {
    this.erasePiece();
    this.myPiece.fall();
    this.addPieceToBoard();
    update( this.boardArray );
  }

  movePiece( keyPress ) {
    if( keyPress === 'd' ) {
      if( this.checkRight() ) {
        this.erasePiece();
        this.myPiece.moveRight();
        this.addPieceToBoard();
        update( this.boardArray );
      } 

      
    } else if ( keyPress === 'a' ) {
      if( this.checkLeft() ) {
        this.erasePiece();
        this.myPiece.moveLeft();
        this.addPieceToBoard();
        update( this.boardArray );
      }
    } else if ( keyPress === 'w' ) {
      if ( this.checkRotation() ) {
        this.erasePiece();
        this.myPiece.rotate();
        this.addPieceToBoard();
        update( this.boardArray );
      }

    }
  }

  checkFall() {
    // if piece at bottom of board
    if( this.myPiece.sq3[ 0 ] === 21 || this.myPiece.sq4[ 0 ] === 21 ) {
      this.erasePiece();
      this.addPieceToBoard();
      this.myPiece.piecePlaced = true;
    // else if piece below 
    } else {
      this.erasePiece();
      if( this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] ] !== 0 ||
          this.boardArray[ this.myPiece.sq2[ 0 ] +1 ] [ this.myPiece.sq2[ 1 ] ] !== 0 ||
          this.boardArray[ this.myPiece.sq3[ 0 ] +1 ] [ this.myPiece.sq3[ 1 ] ] !== 0 ||
          this.boardArray[ this.myPiece.sq4[ 0 ] +1 ] [ this.myPiece.sq4[ 1 ] ] !== 0 ) {
          
          this.addPieceToBoard();

          this.myPiece.piecePlaced = true;
      }
    }
    return this.myPiece.piecePlaced;
  }

  checkRight() {
    let rightClear = false;
      this.erasePiece();
      if ( this.boardArray[ this.myPiece.sq1[ 0 ] ] [this.myPiece.sq1[ 1 ] + 1 ]  === 0 &&
           this.boardArray[ this.myPiece.sq2[ 0 ] ] [this.myPiece.sq2[ 1 ] + 1 ]  === 0 &&
           this.boardArray[ this.myPiece.sq3[ 0 ] ] [this.myPiece.sq3[ 1 ] + 1 ]  === 0 &&
           this.boardArray[ this.myPiece.sq4[ 0 ] ] [this.myPiece.sq4[ 1 ] + 1 ]  === 0  
           ) {
             rightClear = true;
           }
    return rightClear;
  }

  checkLeft() {
      let leftClear = false;
      this.erasePiece();
      if ( this.boardArray[ this.myPiece.sq1[ 0 ] ] [this.myPiece.sq1[ 1 ] - 1 ]  === 0 &&
           this.boardArray[ this.myPiece.sq2[ 0 ] ] [this.myPiece.sq2[ 1 ] - 1 ]  === 0 &&
           this.boardArray[ this.myPiece.sq3[ 0 ] ] [this.myPiece.sq3[ 1 ] - 1 ]  === 0 &&
           this.boardArray[ this.myPiece.sq4[ 0 ] ] [this.myPiece.sq4[ 1 ] - 1 ]  === 0 ) {
             leftClear = true;
           }
      return leftClear;
    }
    checkRotation() {
      let rotationClear = false;
      this.erasePiece();

      // I piece 
      if( this.myPiece.pieceType === 2  && this.myPiece.pos === 0 &&
          this.boardArray[ this.myPiece.sq1[ 0 ] -1 ] [ this.myPiece.sq1[ 1 ] +2 ] === 0 &&
          this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] +1 ] === 0 &&
          this.boardArray[ this.myPiece.sq3[ 0 ] +1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
          this.boardArray[ this.myPiece.sq4[ 0 ] +2] [ this.myPiece.sq4[ 1 ] -1 ] === 0 
           ) { 
        rotationClear = true;
      } 
      else if ( this.myPiece.pieceType === 2 && this.myPiece.pos === 1 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] -2 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] -1 ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] -1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] -2] [ this.myPiece.sq4[ 1 ] +1 ] === 0 
        ) {
          rotationClear = true;
      }


      // J piece
      if ( this.myPiece.pieceType === 3 && this.myPiece.pos === 0 && 
           this.boardArray[ this.myPiece.sq1[ 0 ] -1 ] [ this.myPiece.sq1[ 1 ] +2 ] === 0 &&
           this.boardArray[ this.myPiece.sq2[ 0 ] -2 ] [ this.myPiece.sq2[ 1 ] +1 ] === 0 &&
           this.boardArray[ this.myPiece.sq3[ 0 ] -1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
           this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] -1 ] === 0 
           ) {
             rotationClear = true;
           }
      else if ( this.myPiece.pieceType === 3 && this.myPiece.pos === 1 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] -2 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] +1 ] [ this.myPiece.sq2[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] ] [ this.myPiece.sq3[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] +1 ] === 0 
              ) {
                rotationClear = true;
              }
      else if ( this.myPiece.pieceType === 3 && this.myPiece.pos === 2 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] -1 ] [ this.myPiece.sq1[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] +1 ] [ this.myPiece.sq3[ 1 ] -1 ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] -2 ] === 0 ) {
                  rotationClear = true;
                }
      else if ( this.myPiece.pieceType === 3 && this.myPiece.pos === 3 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] -1 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] +1 ] [ this.myPiece.sq2[ 1 ] -1 ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ]  ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] +2 ] === 0 ) {
                  rotationClear = true;
                }
      // L piece 
      else if ( this.myPiece.pieceType === 4  && this.myPiece.pos === 0 && 
           this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] ] === 0 &&
           this.boardArray[ this.myPiece.sq2[ 0 ] -2 ] [ this.myPiece.sq2[ 1 ] +1 ] === 0 &&
           this.boardArray[ this.myPiece.sq3[ 0 ] -1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
           this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] -1 ] === 0) {
            rotationClear = true;
      } else if ( this.myPiece.pieceType === 4 && this.myPiece.pos === 1 && 
                  this.boardArray[ this.myPiece.sq1[ 0 ] -1 ] [ this.myPiece.sq1[ 1 ] ] === 0 &&
                  this.boardArray[ this.myPiece.sq2[ 0 ] +1 ] [ this.myPiece.sq2[ 1 ] ] === 0 &&
                  this.boardArray[ this.myPiece.sq3[ 0 ] ] [ this.myPiece.sq3[ 1 ] -1 ] === 0 &&
                  this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] -1 ] === 0) {
                    rotationClear = true;
                  } 
      else if ( this.myPiece.pieceType === 4 && this.myPiece.pos === 2 &&
                this.boardArray[ this.myPiece.sq1[ 0 ] -1 ] [ this.myPiece.sq1[ 1 ] -2 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] -1 ] [ this.myPiece.sq2[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] ] [ this.myPiece.sq3[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] +1 ] === 0 ) {
                  rotationClear = true;
                }    
      else if ( this.myPiece.pieceType === 4 && this.myPiece.pos === 3 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] +2 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] +2 ] [ this.myPiece.sq2[ 1 ] -1 ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] +1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] +1 ] === 0 ) {
                  rotationClear = true;
                }
      // S piece
      else if ( this.myPiece.pieceType === 5  && this.myPiece.pos === 0 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] -1 ] [ this.myPiece.sq1[ 1 ] -1 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] -2 ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] -1 ] [ this.myPiece.sq3[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] ] === 0 ) {
                  rotationClear = true;
              }
      else if ( this.myPiece.pieceType === 5  && this.myPiece.pos === 1 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] +2 ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] +1 ] [ this.myPiece.sq3[ 1 ] -1 ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] ] === 0 ) {
                  rotationClear = true;
        }
      else if ( this.myPiece.pieceType === 6 && this.myPiece.pos === 0 &&
                this.boardArray[ this.myPiece.sq1[ 0 ] -1 ] [ this.myPiece.sq1[ 1 ] +2 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] -1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] -1 ] === 0  ) {
                  rotationClear = true;
      } 
      else if ( this.myPiece.pieceType === 6 && this.myPiece.pos === 1 && 
                  this.boardArray[ this.myPiece.sq1[ 0 ] +1 ] [ this.myPiece.sq1[ 1 ] -2 ] === 0 &&
                  this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] -1 ] === 0 &&
                  this.boardArray[ this.myPiece.sq3[ 0 ] +1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
                  this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] +1 ] === 0 ) {
                    rotationClear = true;
      } 
      else if ( this.myPiece.pieceType === 7 && this.myPiece.pos === 0 && 
                this.boardArray[ this.myPiece.sq1[ 0 ] ] [ this.myPiece.sq1[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq2[ 0 ] -2 ] [ this.myPiece.sq2[ 1 ] +1 ] === 0 &&
                this.boardArray[ this.myPiece.sq3[ 0 ] -1 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
                this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] -1 ] === 0 ) {
        rotationClear = true;
      }
      else if ( this.myPiece.pieceType === 7 && this.myPiece.pos === 1 && 
        this.boardArray[ this.myPiece.sq1[ 0 ] ] [ this.myPiece.sq1[ 1 ] -2 ] === 0 &&
        this.boardArray[ this.myPiece.sq2[ 0 ] +1 ] [ this.myPiece.sq2[ 1 ] ] === 0 &&
        this.boardArray[ this.myPiece.sq3[ 0 ] ] [ this.myPiece.sq3[ 1 ] +1 ] === 0 &&
        this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] ] === 0 ) {
        rotationClear = true;
      }
      else if ( this.myPiece.pieceType === 7 && this.myPiece.pos === 2 && 
        this.boardArray[ this.myPiece.sq1[ 0 ] ] [ this.myPiece.sq1[ 1 ] ] === 0 &&
        this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] ] === 0 &&
        this.boardArray[ this.myPiece.sq3[ 0 ] -1 ] [ this.myPiece.sq3[ 1 ] -1 ] === 0 &&
        this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] ] === 0 ) {
        rotationClear = true;
      }
      else if ( this.myPiece.pieceType === 7 && this.myPiece.pos === 3 && 
        this.boardArray[ this.myPiece.sq1[ 0 ] ] [ this.myPiece.sq1[ 1 ] +1 ] === 0 &&
        this.boardArray[ this.myPiece.sq2[ 0 ] +1 ] [ this.myPiece.sq2[ 1 ] -1 ] === 0 &&
        this.boardArray[ this.myPiece.sq3[ 0 ] +2 ] [ this.myPiece.sq3[ 1 ] ] === 0 &&
        this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] +1 ] === 0 ) {
        rotationClear = true;
      }    
      return rotationClear;
    }

    addPieceToBoard() {
      this.boardArray[ this.myPiece.sq1[ 0 ] ] [ this.myPiece.sq1[ 1 ] ] = this.myPiece.pieceType
      this.boardArray[ this.myPiece.sq2[ 0 ] ] [ this.myPiece.sq2[ 1 ] ] = this.myPiece.pieceType
      this.boardArray[ this.myPiece.sq3[ 0 ] ] [ this.myPiece.sq3[ 1 ] ] = this.myPiece.pieceType
      this.boardArray[ this.myPiece.sq4[ 0 ] ] [ this.myPiece.sq4[ 1 ] ] = this.myPiece.pieceType
    }

}

gameBoard = new Board( 22 );

currentPieceBag = new PieceBag();

let pieceToSpawn = 0;

gameBoard.spawnPiece( currentPieceBag.pieceBag[ pieceToSpawn ] );

setInterval( function() {
  // check to see if piece has been placed or is still falling
  if ( !gameBoard.checkFall() ){
    gameBoard.fallPiece();
    update( gameBoard.boardArray );
  } else {
    // has been placed
    update( gameBoard.boardArray );
    pieceToSpawn +=1;
    gameBoard.spawnPiece( currentPieceBag.pieceBag[ pieceToSpawn ] );
    update( gameBoard.boardArray );
    if( pieceToSpawn === 6 ) {
      pieceToSpawn = 0;
      currentPieceBag = new PieceBag(); 
    }
  }
}, 350 );




// render tetris board
function update( data ) {

  svg.selectAll( 'g' ).remove();

  let rows = svg.selectAll( '.row' )
  .data( function() {
    return data;
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









