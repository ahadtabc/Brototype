// let arr1=[1,2,3,4,5];
// let arr2=[6,7,8,9,10];

// // arr2.push(99)
// let final=arr1.concat(arr2)
// // let final=[...arr1,...arr2]

// // console.log(arr2)
// console.log(final)

// let ar1=["India","Kerala",500,["CCJ","COK","TVM"]];

// let [country,state,rupee,[a3,a2,a1]]=ar1

// console.log(country)
// console.log(state)
// console.log(rupee)
// console.log(a1)
// console.log(a2)
// console.log(a3)


// -------------------------------------
let myObj={
    name:"Ahad",
    age:29,
    job:"Mern Stack Developer",
    place:"kochi",
    skills:{
        computer:"IT support",
        driving:"Car & Bike"
    }
}

let {name,age,job,skills:{j1,j2}}=myObj;

console.log(myObj)