// It is Es6 Feature that allows to extact values from array and also object an assign them to variables


// rest parameter:-The Rest Operator (Rest Element) collects the remaining elements of an array into 
//                 a new array during destructuring.
// let students=["Ahad","Nabhan","Akhil","Javad","Musthafa"];

// let [first,second,...others]=students;

// console.log(first)
// console.log(others)
// -----------------------------------------------
let profile={
    name:"Tony Stark",
    place:"New York",
    worth:"1 Trillion"
}

let {name,...misc}=profile;

console.log(name)
console.log(misc);