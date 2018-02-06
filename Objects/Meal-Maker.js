const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

  get appetizers() {
    return this._appetizers;
   },
  set appetizers(appetizer) {
    this._appetizers.push(appetizer);
   },
  get mains() {
    return this._mains;
   },
  set mains(entree) {
    this._mains.push(entree);
   },
  get desserts() {
    return this._desserts;
   },
  set desserts(dessert) {
    this._desserts.push(dessert)
   }

  },

get courses() {
  return {
    appetizers: this._courses.appetizers,
    mains: this._courses.mains,
    desserts: this._courses.desserts,
  };
 },

 addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
     name: dishName,
     price: dishPrice,
 };
	  this._courses[courseName].push(dish);
},

 getRandomDishFromCourse: function (courseName) {
   const dishes = this._courses[courseName];
   const randomIndex = Math.floor(Math.random() * dishes.length);
   return dishes[randomIndex];
 },

 generateRandomMeal: function() {
  const appetizer = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizer.price + mains.price + desserts.price;

  return `Your meal is ${appetizer.name}, ${mains.name}, and ${desserts.name}. The total is $${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Avocado Egg Rolls', 4.25);
menu.addDishToCourse('appetizers', 'Chili Cheese Fries', 3.75);
menu.addDishToCourse('appetizers', 'Mozzerella Sticks', 4.50);

menu.addDishToCourse('mains', 'Burger', 5.50);
menu.addDishToCourse('mains', 'Smoked Salmon', 7.75);
menu.addDishToCourse('mains', 'T-Bone Steak', 8.45);

menu.addDishToCourse('desserts', 'Chocolate Fudge Cake', 3.75);
menu.addDishToCourse('desserts', 'Chocolate Brownie with Ice Cream', 4.50);
menu.addDishToCourse('desserts', 'Warm Cookie', 3.25);

let meal = menu.generateRandomMeal();
console.log(meal);
