// callback : a callback or callback function is any reference to
//            executable code that is passed as an argument to another
//            piece of code or function
// Easy Def : a callback is a function which get passed to another
//            function as argument
// Code here :
// function add(a, b, callback) {
//   callback(a, b);
//   return a + b;
// }
// function print(a, b) {
//   console.log(a + " " + b);
// }
// let res = add(25, 26, print);
// console.log(res);

// Short code here
function add(a, b, callback) {
  let product = callback(a, b);
  console.log(product);
  return a + b;
}
let res = add(25, 26, (a, b) => {
  return a * b;
});
console.log(res);
