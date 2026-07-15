let brand = {
  model_name: "5 Series",
  color: "Dark blue",
  varient: {
    option: "Diesel",
  },
};

let testShallow = Object.assign({}, brand);
// let testShallow={...brand}

testShallow.model_name = "m5";

testShallow.varient.option = "Petrol";

console.log(testShallow);
console.log(brand);

// A shallow copy creates a new object but copies only the top-level properties, while nested objects remain shared by reference.
