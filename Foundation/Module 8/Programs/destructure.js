let cars = ["Bmw", "Mercedes", "Audi", "Lexus", "Genesis", "alfa Romeo"];

const [first, second, ...reminig] = cars;

console.log(first);
console.log(reminig);

// --------------------------------------------------
const student = {
  name: "Ahad",
  age: 29,
  city: "Malappuram",
  course: "MernStack",
};

const { name, city, ...otherDetails } = student;

console.log(name);

console.log(city);
console.log(otherDetails);
