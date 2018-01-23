//Just for reference when using 'while' loops:

let cards = ['Diamond', 'Spade', 'Heart', 'Club'];

let currentCard = 'Club';

while (currentCard !== 'Spade') {
  console.log('Your Card: ' + currentCard);
  currentCard = cards[Math.floor(Math.random() * 4)];
}

console.log('Your Card: '+ currentCard + ', I found a Spade!');
