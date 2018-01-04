/*Began by creating a switch statement that showed everyday of the week and the
 ability to change the hours logged for each day,
 this is the sleep that the user got during his week. */

const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 7;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'Invalid Day';
      break;
  }
}

/*Created a function to add up all the hours of the week*/
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') +
  getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') +
  getSleepHours('saturday') + getSleepHours('sunday');

/*But we need something to compare the actual hours to the recommended hours,
you can change the recommended hours and they are multiplied by 7 for the number of days in the week.*/
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};

/*Created a function to run the program and created variables for the functions
 of actual sleep and the recommended sleep.*/
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

/*Then created if/else statements to compare the variables values and return a
string based on the users logged hours of sleep.*/
if (actualSleepHours === idealSleepHours) {
  console.log('You have had the perfect amount of sleep this week. Well done!');
}

if (actualSleepHours > idealSleepHours) {
  console.log('You have slept ' + (actualSleepHours - idealSleepHours) + ' hour(s) passed the recommended amount per week!');
}

if (actualSleepHours < idealSleepHours) {
  console.log('You are short ' + (idealSleepHours - actualSleepHours) + ' hour(s) of sleep this week! Get your sleep!');
 }
};

console.log('Hours slept this week: ' + getActualSleepHours());
calculateSleepDebt();
