const kelvin = prompt('What is the weather today (in Kelvin) ?');
// Creates a constant variable kelvin and creates a pop-up window asking the degrees in Kelvin.
const celsius = kelvin - 273;
// Constant variable that subtracts 273 from kelvin called celsius
let fahrenheit = celsius * (9/5) + 32;
// fahrenheit variable that takes celsius multiplies it by 9/5 and then adds 32 resulting in the measurement fahrenheit.
fahrenheit = Math.floor(fahrenheit)
// assigns and rounds down the variable fahrenheit to a whole number
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
//logs to console the temperature in fahrenheit using the variable fahrenheit within the string.
