// A shallow copy creates a new object while copying only the top-level properties. 
// Nested objects or arrays are shared by reference between the original and the copied object.|

// DeepCopy:-
// A deep copy creates a completely independent copy of an object, including all nested objects and arrays. 
// The copied object does not share any references with the original object.
let myobj={
    name:"Ahad",
    address:{
        city:"Malappuram"
    }
}

// let shallow1= {...myobj};
// let shallow1= Object.assign({},myobj)

// console.log(myobj)
// shallow1.name="Akhil";
// shallow1.address.city="Calicut";
// console.log(shallow1)
// console.log(myobj)

// let deep1=structuredClone(myobj);
let deep1=JSON.parse(JSON.stringify(myobj))
console.log(myobj);
deep1.name="Nabhan"
deep1.address.city="Manjeri";
console.log(deep1)
console.log(myobj)


