// 1st for loop
// syntax :
// for(<let/const/var> value of <array>){
//      <statements>;
// }
// Iterate : accesing value one by one and applying operations
// Code here:
// let arr = [256, 89, 47, 26, 36];
// for (let value of arr) {
//   console.log(value);
// }

// 2nd way for loop or forEach
// syntax :
// note : index parameter or argument is optional
// array.forEach((value,index)=>{
//    <statements>;
// })
// Code here :
// let arr = [256, 89, 47, 26, 36];
// arr.forEach((value, index) => {
//   console.log(value + " " + index);
// });

// map : map takes value as argument
//       and returns modified array
// Code here :
// let arr = [1, 2, 3, 4, 5, 6];
// let prod = arr.map((value) => {
//   console.log(value);
//   return value * 10;
// });
// console.log(prod);

// filter : return modified array after filtering
//          items of array
// Code here :
// let arr = [1, 2, 3, 4, 5, 6];
// let oddArr = arr.filter((value) => value % 2 !== 0);
// let evenArr = arr.filter((value) => value % 2 === 0);
// console.log(arr);
// console.log(oddArr);
// console.log(evenArr);

// reduce : used to accomudate the array in a single value
// Code here :
let arr = [1, 2, 3, 4, 5, 6];
let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);
