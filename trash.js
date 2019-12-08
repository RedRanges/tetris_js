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


spawn locations
gameBoard.boardArray[0][3] = 1;
gameBoard.boardArray[0][4] = 1;
gameBoard.boardArray[0][5] = 1;
gameBoard.boardArray[1][3] = 1;
gameBoard.boardArray[1][4] = 1;
gameBoard.boardArray[1][5] = 1;
gameBoard.boardArray[1][6] = 1;