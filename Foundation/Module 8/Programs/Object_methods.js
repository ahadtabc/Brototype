// let arr=[1,2,3,4,5]

// function myfun(para){
//     console.log("TEST PURPOSE: ",para);
// }

// arr.forEach(myfun)

// let age =22;

// age>=18?console.log("True"):console.log("False");

// let age1=25;

// if(age1>=18){
//     console.log("True");
// }else{
//     console.log("False")
// }

const student = {
  name: "Ahad",
  age: 24,
  city: "Kochi",
};

const s1 = {
  school: "IKHSS",
};


// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))
// console.log(Object.assign({},student,s1));
// Object.seal(s1);
// Object.freeze(s1)

s1.school = "Gems";
s1.location = "MPM";

console.log(s1);
// let final = Object.hasOwn(s1, "location");
// console.log(final);

// const person = {
//   sample() {
//     console.log("Hello_World");
//   },
// };

// const citizen = Object.create(person);
// citizen.sample();

// let arr = [
//   ["name", "Ahad"],
//   ["age", 29],
// ];
// console.log(Object.fromEntries(arr));

// console.log(Object.is(53, 53));
// console.log(Object.is(99, "99 "));

// console.log(Object.getOwnPropertySymbols(student));

// let a = 0 || 100;
// let b = 0 ?? 100;
// console.log(a, b);
