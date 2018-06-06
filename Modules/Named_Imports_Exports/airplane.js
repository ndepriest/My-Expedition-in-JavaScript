export let availableAirplanes = [
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

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  let range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  }
 };

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
};




// Remember that airplane.js and missionControl.js are using one another. You are
// exporting airplane module to missionControl.js.
