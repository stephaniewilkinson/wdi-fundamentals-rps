var getPlayerMove = function(move) {
   // Write an expression that operates on a variable called `move`
   // If a `move` has a value, your expression should evaluate to that value.
   // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  if (!move) {
    getInput();
  }
  return move;
}


var getComputerMove = function(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.

    if (!move) {
      randomPlay();
    }
    return move;
}
