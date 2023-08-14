// DataType : A datatype is a classification that tells the variables
// what type of value they can hold.

// Variable : A variable is a named storage location
// in a computer program that holds a value.

// Different Datatypes
// number => 2 to power 53
// bigint => holds large number
// string => collection of characters
// boolean => holds true or false
// null => standalone value
// undefined
// symbol => unique
// objects

// Code here:
// let variable; // by default undefined get's stored if value is not initilized
// console.log(variable);

// let,var,const keywords used to declare a variable

// const keyword

// Code here :
// const numConst = 25; // const variable value can not be changed once initilized
// numConst = 89;
// console.log(numConst);

// var keyword

// Code here :
// var numVar = 85; // global scope [so you must not use it, use let instead]
// console.log(numVar);

// let keyword

// Code here :
let numLet = 25; // local scope [you should use let keyword for variable declaration]
numLet = 89;
console.log(numLet);
