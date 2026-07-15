//Largest Odd using Reduce?

// let arr = [1, 2, 3, 4, 5,7];

// let final = arr.reduce((acc, x) => {
//   if (x % 2 !== 0 && x > acc) {
//     acc = x;
//   }
//   return acc;
// }, null);

// // if (final === 0) {
// //   console.log("Sorry No Odd is Found!");
// // } else {
//   console.log(final);
// //}


let arr=[1,2,3,4,5,6];

let final=arr.reduce((acc,x)=>{
  if(x%2!==0 && x>acc){
    acc=x;
  }
  return acc;
})

console.log(final)