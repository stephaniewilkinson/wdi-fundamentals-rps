  ////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  if (!move) {
    getInput();
  }
  return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (!move) {
      randomPlay();
    }
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
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
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
      // This function should continue to play Rock Paper Scissors until either the
      // player or the computer has won five times.
      // After each 'round', display some text in the console indicating who played
      // what, who won, and what the current scoreboard looks like.
      // For example,
      //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
      //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
      /* YOUR CODE HERE */
    var rounds = 0;

    for (playerWins < 5 AND computerWins <5) {
      if winner == "player" {
        playerWins ++;
      }
      else if winner = "computer" {
        computerWins ++;
      }
      else {}
    }

    return [playerWins, computerWins];
}

