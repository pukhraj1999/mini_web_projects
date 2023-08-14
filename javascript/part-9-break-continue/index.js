// break: helps to get out of loops and switch statements control.
// Easy Explanation: helps to get out for loop or while loop
// and also from switch statements.

// Code here:
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   }
//   console.log(i);
// }

// Other example of break
// Code here :
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     if (j == 3) {
//       break;
//     }
//     console.log(`i : ${i} j : ${j}`);
//   }
// }

// continue : helps to skip in for loop or while loop
// Note : that means all the statements written after
//        continue will get executed for that value of i

// Code here : Q -> Print all odd numbers
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
