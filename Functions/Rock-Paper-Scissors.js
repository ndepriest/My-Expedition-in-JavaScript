const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
// makes sure that inputs made by the user wont need to be case sensitive
  switch (userInput) {
    case 'rock':
     return 'Rock'; // Carefull, need to use capitals from here on out if I want to make it look nice. (and work)
     break;
    case 'paper':
     return 'Paper';
     break;
    case 'scissors':
     return 'Scissors';
     break;
    default:
     console.log('Invalid input.');
     break;
  // Seems redundant, I'll look into this at a later time to see if I can clean this up.
 }
}

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
// function to create a random number from 0-2 that is assigned to a string. (rock, paper, scissors)
// when that number is called it returns the appropriate string 1 = rock
  switch (randomNumber) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
      break;
 }
}

const determineWinner = (userChoice, computerChoice) => {
// function to determine who wins, if/else statements.
  if (userChoice === computerChoice) {
    return 'The game is a tie!';
  }
// this is where it is tricky. Take note of the if inside of the if statement.
// create every possible scenario based off what the user inputs
  if (userChoice === 'Rock') { // MAKE SURE TO USE CAPITALS !!!
     if (computerChoice === 'Scissors') {
       return 'You Won!!';
     } else {
       return 'The Computer won!';
     }
   }

  if (userChoice === 'Paper') { // !!!
    if (computerChoice === 'Rock') {
      return 'You Won!!';
    } else {
      return 'The Computer won!';
    }
  }

  if (userChoice === 'Scissors') { // !!!
    if (computerChoice === 'Paper') {
      return 'You Won!!';
    } else {
      return 'The Computer won!';
    }
  }
}

  const playGame = () => {  // now this is where it all comes together.
    const userChoice = getUserChoice('rock'); //this is where the user inputs thier choice of rock, paper, or scissors. 
    const computerChoice = getComputerChoice(); // created two new variables that take on the functions
   console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice); //interpelope the new variables into a console.log statement that will read to the console
    console.log(determineWinner(userChoice, computerChoice)); // pass the variables to the parameters of the determineWinner() function.
  }

// cross your fingers...
  playGame() // It works!
