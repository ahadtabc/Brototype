// let addition = function (a) {
//   return function (b) {
//     console.log(a + b);
//   };
// };

// let testAddition = addition(5);

// testAddition(4);

// let multiplay = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// const newMulti = multiplay(10);

// newMulti(2);

// without curring:-
// function add(a, b, c) {
//     return a + b + c;
// }

// console.log(add(10, 20, 30));

// with Curring:-
// function add(a) {
//   return function name1(b) {
//     return function name2(c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(add(10)(20)(30));



// curring with Arrow function
// const add = (a) => (b) => (c) => a + b + c;

// console.log(add(10)(20)(30));

// English

// Currying is the process of converting a function that takes multiple arguments into a sequence of functions that each take one argument at a time.

// Malayalam

// ഒന്നിലധികം arguments സ്വീകരിക്കുന്ന function-നെ, ഓരോ function-വും ഒരു argument മാത്രം സ്വീകരിക്കുന്ന functions-ന്റെ ശ്രേണിയായി മാറ്റുന്ന പ്രക്രിയയെയാണ് Currying എന്ന് പറയുന്നത്.
