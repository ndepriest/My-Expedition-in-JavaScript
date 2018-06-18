import {countCharacter, capitalizeFirstCharacterOfWords, reverseWord, reverseAllWords,
  replaceFirstOccurence, replaceAllOccurrences, encode, palindrome, pigLatin} from './messageMixer.js';
import MessageMixer from './messageMixer.js';


function displayMessage() {
  console.log(countCharacter("What is the true meaning of JavaScript?", "t"));
  console.log(capitalizeFirstCharacterOfWords("What is the true meaning of JavaScript?"));
  console.log(reverseWord("What is the true meaning of JavaScript?"));
  console.log(reverseAllWords("What is the true meaning of JavaScript?"));
  console.log(replaceFirstOccurence("What is the true meaning of JavaScript?", "JavaScript", "life"));
  console.log(encode("What is the true meaning of JavaScript?"));
  console.log(palindrome("What is the true meaning of JavaScript?"));
  console.log(pigLatin("What is the true meaning of JavaScript ?", "ay"));
};

displayMessage();
