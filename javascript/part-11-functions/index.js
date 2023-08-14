// Functions : functions are blocks of reusable code that can be defined and
//             invoked to perform specific tasks or calculations.
// syntax of function :
// function <nameOfFunction>(<formal arguments>){
//  <statements>;
// }
// <nameofFunction>(<actual arguments>)

// Example of function without arguments
// Code here :
// function greet() {
//   console.log("Good Morning!");
//   console.log("How are you?");
// }
// greet();
// greet();

// Example of function with arguments
// Code here :
// function add(a, b) {
//   console.log(a + b);
// }
// add(25, 75);

// Note : variables that we define in function are called formal arguments
//        and values that we give while calling or invoking functions are
//        called actual arguments

// return keyword : used to return the value in function
// Code here
function add(a, b, c) {
  return a + b + c;
}
let res = add(1, 2, 3);
console.log(res);
