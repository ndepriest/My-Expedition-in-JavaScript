class RentalUnit {
  constructor(address, costPerYear) {
  this._address = address;
  this._costPerYear = costPerYear;
 }

get address() {
  return this._address;
 }

get costPerYear() {
  return this._costPerYear;
 }

calculateMonthly() {
  return this.costPerYear / 12;
 }
}

class Apartment extends RentalUnit {
  constructor(address, costPerYear, numberOfBedrooms) {
    super(address, costPerYear);
    this._numberOfBedrooms = numberOfBedrooms;
  }

  get numberOfBedrooms() {
    return this._numberOfBedrooms;
  }

  static randomBorough() {
    const myBoroughs = ['Manhattan', 'Brooklyn', 'Queens', 'The Bronx', 'Staten Island'];
    return myBoroughs[Math.floor(Math.random() * 5)];
  }
}

const myApartment = new Apartment('1234 W 54th', 22000, 3);
