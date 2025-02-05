// Probleme 1
const checkAge = (age) =>
  age >= 18 ? "You are good to go!" : "Sorry! You must be 18 or older!";
console.log(checkAge(20));
console.log(checkAge(16));

//Probleme 2
const isRaining = (raining) =>
  raining ? "Get your rain jacket!" : "No rain on today's forecast!";
console.log(isRaining(true));
console.log(isRaining(false));

//Probleme 3
const checkEven = (number) =>
  number % 2 === 0 ? "That's an even number!" : "That's an odd number!";
console.log(checkEven(4));
console.log(checkEven(7));

// Probleme 4
const compareNumber = (num1, num2) =>
  num1 > num2
    ? `${num1} is more than ${num2} `
    : `${num1} is less than ${num2}`;
console.log(compareNumber(4, 8));
console.log(compareNumber(152455, 8465494));


