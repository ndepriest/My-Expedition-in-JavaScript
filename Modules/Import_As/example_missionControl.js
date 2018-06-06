import { aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane'; // take note of aliases (compare to Named_Imports_Exports folder)

function displayFuelCapacity() {
  aircrafts.forEach(function(element){  // take note
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
    });
}

displayFuelCapacity();

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets speed range requirements: '+ meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange) ); // take note
  });
};

displaySpeedRangeStatus();

function displayStaffStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) ); // take note
  });
};

displayStaffStatus();
