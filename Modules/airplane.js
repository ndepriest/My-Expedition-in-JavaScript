let Airplane = {};

Airplane.availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800
  },
  {
    name: 'SkyJet',
    fuelCapacity: 500
  }
];

export default Airplane;



// Remember that airplane.js and missionControl.js are using one another. You are
// exporting airplane module to missionControl.js.
