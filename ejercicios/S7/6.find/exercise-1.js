/**
 * Dado el siguiente array, usa .find() para econtrar el número 100.
 */

const numbers = [32, 21, 63, 95, 100, 67, 43];

const searchedNumber = 100;
console.log(numbers.find((number) => number === searchedNumber));