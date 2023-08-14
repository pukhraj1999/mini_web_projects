// 1st way to create a function
// Code here
// function add(a, b) {
//   return a + b;
// }
// console.log(add(25, 75));

// 2nd way to create a function
// In this way, we declare function like we declare variables.
// functions declared as value of variable here
// Code here
// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(25, 96));

// 3nd way to create a function
// These functions are called arrow functions
// Code here
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(258, 963));

// 4th way to create a function
// another way to represent arrow function
// Note : if you do not use curly braces, then javascript knows
//        after (=>) arrow you want to return the statement
// Code here
const add = (a, b) => a + b;
const product = (a, b) => a * b;
console.log(add(256, 991));
