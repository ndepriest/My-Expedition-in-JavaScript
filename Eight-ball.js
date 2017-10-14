let userName = 'Nathan';

userName ? console.log('Hello, ' + userName + '!') :
console.log('Hello!');
// checks the 'truthyness' of the variable userName and returns the appropriate log.
let userQuestion = 'Will I ever learn JavaScript?';
// the Question that the user qants to ask the eight ball
let randomNumber = Math.floor(Math.random() * 8);
// generates a random number that is rounded down. dont forget that when rounding down to multiply by one number higher than wanted (random number between 0-7)
let eightBall = '';
// the eightball response with the string left empy intentianally.
switch(randomNumber) {
  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall = 'Reply hazy, try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 :
    eightBall = "Don't count on it";
    break;
  case 5 :
    eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
}
// switch list that uses the  randomNumber varialbe to randomly pick a case to log a prediction to the eightBall variable.
console.log('The user asked: ' + userQuestion);
console.log('The eight ball answered: ' + eightBall);
// using interpolation to log the results and log the question asked by the user.
