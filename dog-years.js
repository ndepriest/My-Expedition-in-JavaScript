let myAge = 25;
//creates a variable that assigns my age, not constant.
let earlyYears = 2;
//creates a value for the first two years, the value of this variable will change.
earlyYears *= 10.5;
//multiplies early years (2) by 10.5
let laterYears = myAge -= 2;
//since we already accounted for the first two years, created a new variable for every year after the first two.
laterYears *= 4;
//every year after first two human years is multiplied by 4 dog years.
let myAgeInDogYears = earlyYears + laterYears;
//adding both earlyYears and laterYears to give me my age in dog years hence the new variable.
let myName = "NATHAN";
myName = myName.toUpperCase();
//Created a variable to hold my name, and then told the variable to be in all uppercase.

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
