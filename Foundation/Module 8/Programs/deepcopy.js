let brand = {
  model_name: "5 Series",
  color: "Dark blue",
  varient: {
    option: "Diesel",
  },
};

let testDeepCopy = structuredClone(brand);

// let testDeepCopy=JSON.parse(JSON.stringify(brand))

testDeepCopy.model_name = "X Series";
testDeepCopy.varient.option = "Electric";

console.log(testDeepCopy);

// A deep copy creates a completely independent copy of an object, including all nested objects and arrays.
