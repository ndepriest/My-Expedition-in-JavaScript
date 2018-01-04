let orderCount = 0;

const takeOrder = (topping, crustType) => {
  orderCount++;
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
};

takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
};

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * 0.06;
};

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
};

console.log('Total: $' + getSubTotal(orderCount));
console.log('Total After Tax: $' + getTotal());
