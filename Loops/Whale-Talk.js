let input = 'What in the world is Whale Talk? Do you know?';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

//the goal here is to use loops to read the above string and then compare each position
// to the vowels, confirm, push to the resultArray to create Whale talk lol......

//below is a for loop and a nested for loop. The beginning loop checks each position for the length of the string.
//the second loop nested within runs fully for every position that the first loop checks.
//this way it can check each position whithin the string for a 'vowel'.
//if this is true it pushes the that vowel to the resultArray.

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  for ( let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
// I wanted to extend the e's and u's so this logic statement adds an aditional e or u when the loop finds one.
  if (input[inputIndex] === 'e' || input[inputIndex] === 'u') {
    resultArray.push(input[inputIndex]);
  }
}

// WHALE TALK!
console.log(resultArray.join('').toUpperCase());
