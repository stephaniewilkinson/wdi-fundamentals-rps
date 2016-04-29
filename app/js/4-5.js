    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.

var getWinner = function(playerMove, computerMove) {
  if (playerMove == "rock" && computerMove == "rock") {
    return 'tie';
  }
  else if (playerMove == "rock" && computerMove == "paper") {
    return 'computer'
  }
  else if (playerMove == "rock" && computerMove == "scissors") {
    return 'player'
  }
  else if (playerMove == "paper" && computerMove == "rock") {
    return 'player'
  }
  else if (playerMove == "paper" && computerMove == "paper") {
    return 'tie'
  }
  else if (playerMove == "paper" && computerMove == "scissors") {
    return 'computer'
  }
  else if (playerMove == "scissors" && computerMove == "rock") {
    return 'computer'
  }
  else if (playerMove == "scissors" && computerMove == "paper") {
    return 'player'
  }
  else if (playerMove == "scissors" && computerMove == "scissors") {
    return 'tie'
  }
  else{
  }
}
