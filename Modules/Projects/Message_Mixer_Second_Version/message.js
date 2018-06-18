import MessageMixer from './messageMixer.js';

function displayMessage() {
  console.log(MessageMixer.countCharacter("What is the true meaning of JavaScript?", "t"));
  console.log(MessageMixer.capitalizeFirstCharacterOfWords("What is the true meaning of JavaScript?"));
  console.log(MessageMixer.reverseWord("What is the true meaning of JavaScript?"));
  console.log(MessageMixer.reverseAllWords("What is the true meaning of JavaScript?"));
  console.log(MessageMixer.replaceFirstOccurence("What is the true meaning of JavaScript?", "JavaScript", "life"));
  console.log(MessageMixer.encode("What is the true meaning of JavaScript?"));
  console.log(MessageMixer.palindrome("What is the true meaning of JavaScript?"));
  console.log(MessageMixer.pigLatin("What is the true meaning of JavaScript ?", "ay"));
}

displayMessage();
