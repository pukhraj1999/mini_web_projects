// Arrays : An array is a collection of items of same data type
//          stored at contiguous memory locations
// Note : array starts at 0th index
// Scnerio to explain continuous memory location :
// Let's assume number store size of 4 bytes and our 0 th index element
// of array is at 1000 memory location, then our 1st index element is at
// 1004, 2nd at 1008 and so on.

// Code here :
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// console.log(arr.length); // use to print length of array
// console.log(arr[0]); // [] use to retrieve the element from array at particular index

// Iterating the array
// Code here
// let arr = [25, 36, 78, 96, 12];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Frequently used methods : push(),pop()
// push(),pop() -> stack (LIFO)
// Methods available in arrays
// let arr = [];
// arr.push(90); // used to add element in array
// arr.push(60); // used to add element in array
// arr.push(30); // used to add element in array
// arr.pop(); // used to remove the last element
// console.log(arr);

// Other important methods :
// unshift(),shift() -> queue (FIFO)
// Code here :
// let arr = [25, 26, 27, 28, 29, 30];
// arr.shift(); // remove the 0th index element of array
// arr.unshift(90); // used to insert element at 0th index
// console.log(arr);

// get subset of array
let arr = [25, 26, 98, 74, 15, 36];
let subset1 = arr.slice(1, 3); // use to fetch subset of array [2nd argument exclusive]
console.log(subset1);
let subset2 = arr.splice(1, 3); //use to fetch subset of array [all arguments inclusive]
console.log(subset2);
