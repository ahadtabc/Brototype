let obj={
    name:"Ahad",
    address:{city:"Malappuram"}
}


let shallowCopy1={...obj};

// let shallowCopy2=Object.assign({},obj);

shallowCopy1.name="John"

shallowCopy1.address.city="Calicut";

console.log(shallowCopy1.name,obj.name);

console.log(shallowCopy1.address.city,obj.address.city);

// ==================================================================Shallow Copy-

let obj1={
    name:"Ahad",
    address:{city:"Malappuram"}
}

// let deepCopy=structuredClone(obj1)

let deepCopy=JSON.parse(JSON.stringify(obj1));

deepCopy.name="Cooper";
console.log(deepCopy.name,obj1.name)

deepCopy.address.city="Kochi";

console.log(deepCopy.address.city,obj1.address.city)

// ===================================================================Deep Copy


Object.assign({},obj)
{...obj}

JSON.parse(JSON.stringify(obj))
structuredClone(obj)