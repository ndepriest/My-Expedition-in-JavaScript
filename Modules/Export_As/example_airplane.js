let availableAirplanes = [
  {
    name: 'AeroJet',
    maxSpeed: 1200,
    minSpeed: 300,
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  },
  {
    name: 'SkyJet',
    maxSpeed: 800,
    minSpeed: 200,
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants']
  }
];

let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  }
 };

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
};

//Below is an example of export as to change variable names to perhaps make things easier to type in the future or even make them easier to identify.
export { availableAirplanes as aircrafts, flightRequirements as flightReqs, meetsStaffRequirements as meetsStaffReqs, meetsSpeedRangeRequirements as meetsSpeedRangeReqs};
