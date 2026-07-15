// let obj1={
//     name:"ahad",
//     address:{
//         city:"malappuram"
//     }
// }

// const shadowCopy1={...obj1}

const shadowCopy1=Object.assign({},obj1)

// shadowCopy1.name="akhil";

// shadowCopy1.address.city="calicut"

// console.log(shadowCopy1)

// console.log(obj1)

// --------------------------------


let obj1={
    name:"ahad",
    address:{
        city:"malappuram"
    }
}

// const shadowCopy1={...obj1}
let deepCopy1=JSON.parse(JSON.stringify(obj1))

deepCopy1.name="akhil";

deepCopy1.address.city="calicut"

console.log(deepCopy1)

console.log(obj1)