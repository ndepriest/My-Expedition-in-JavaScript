let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//Split the single string into individual words
let storyWords = story.split(' ');

//logg the total word count
console.log('The total word count is: ' + storyWords.length);

//create a new array exempt of the unnecessary words. why was this so difficult?
let betterWords = storyWords.filter(words => !unnecessaryWords.includes(words) );

//let the user know how many times they have used those overused words
let overUsedExtremely = 0
let overUsedVery = 0
let overUsedBasically = 0

storyWords.filter(function(overUsed) {

  if (overUsed === overusedWords[0]) {
 overUsedExtremely++;
} else if (overUsed === overusedWords[1]) {
 overUsedVery++;
} else if (overUsed === overusedWords[2]) {
 overUsedBasically++;
}
});

console.log('Overused word: ' + overusedWords[0] + ' -- Count: ' + overUsedExtremely);
console.log('Overused word: ' + overusedWords[1] + ' -- Count: ' + overUsedVery);
console.log('Overused word: ' + overusedWords[2] + ' -- Count: ' + overUsedBasically);

//Count how many sentences there are in the paragraph
let sentences = 0;

// Looks for '.' and '!' and then adds to the sentences variable everytime it finds either.
// I still am trying to understand the need for word[word.length-1]
// Will look into this.
storyWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentences++;
  }
});

console.log('Total sentences: ' + sentences);

//Join the betterWords array back into a single string.
console.log(betterWords.join(' '));
