// Conditional Operators (>,<,>=,<=,==,===(strictly equal to))
// Note : For checking equality, we mostly use === operator instead of == .
// Note : === check both for it's value and it's type
// Code Here :
// console.log(25 > 22);
// console.log(25 < 22);
// console.log(25 >= 22);
// console.log(25 >= 25);
// console.log(25 <= 22);
// console.log(25 === 25);

// && (and operator) all conditions must be true
// Code here :
// let a = 25;
// console.log(a >= 20 && a <= 30);

// || (or operator) one of condition must be true
// Code here :
// let a = 25;
// console.log(a > 20 || a < 0);

// if-else, if-else-if-else-else
// Code here
// if-else example
let tmp = 35;
if (tmp <= 24) {
  console.log("It's chill!!");
} else {
  console.log("It's warm!!");
}
// if-else-if-else-else example
let year = 2064;
if (year >= 2050) {
  console.log("Greater than 2050.");
} else if (year >= 2000) {
  console.log("Greater than 2000.");
} else {
  console.log("Invalid Value!!");
}
