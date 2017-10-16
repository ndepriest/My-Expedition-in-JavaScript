let raceNumber = Math.floor(Math.random()*1000);
let earlyReg = false;
let runnerAge = 23;

if (!earlyReg) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyReg === true) {
   console.log('Your race time is at 9:30 am. Here is your race number: '+ raceNumber +'. Run Forest, Run!')
} else if (earlyReg === true || runnerAge > 18) {
   console.log('Your race time is at 11:00 am. Here is your race number: '+ raceNumber +'. Good Luck!')
} else if (runnerAge < 18 && earlyReg === false) {
   console.log('Your race time is at 12:30 pm. Here is your race number: '+ raceNumber +'. Let the wind be with you!')
} else {
   console.log('There seems to be an error, please see the registration desk!')
}
