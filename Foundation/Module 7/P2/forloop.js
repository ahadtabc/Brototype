const arr=[1,2,3,4,5];

let newArr=arr.map((x)=>x*2);

console.log(newArr);

const arr=[1,2,3,4,5];

let newArr=[];

console.log(newArr);
for(let i=0; i<arr.length;i++){
 newArr.push(arr[i]*2)
}

console.log(newArr);

const Obj={
    a:"Abdul",
    b:"Ahad",
    c:29
}

for(let i in Obj){
    console.log(Obj[i])
}

const arr=[1,2,3,4,5];

for(let i of arr){
    console.log(i)
}

const name="Ahad";

console.log(name.length);

const name="Ahad";

console.log(name.charAt(0));

const name="Ahad";

console.log(name.slice(0,3));

const name1 = "Abdul";
const name2 = "Ahad";

const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,10];
console.log(arr1.concat(arr2));

console.log(name1.concat(name2));

function myFun() {
  let value = 99;
  function subFun() {
    console.log(value);
  }
  subFun();
}

myFun();

let arr=[1,2,3,[4,1,[2,3],4,5],6,7,[8,9]];

console.log(arr.flat(Infinity));

function name1(a) {
  return function name2(b) {
    return function name3(c) {
      return a + b + c;
    };
  };
}

var res = name1(10)(20)(30);

console.log(res);

function name1(a) {
    return function name2(b) {
        return function name3(c) {
            // Return the sum so the result propagates back up
            return a + b + c;
        };
    };
}

// Usage:
// Each function is called with one argument at a time
const result = name1(1)(2)(3);

console.log(result); // Output: 6


let sample=10;

console.log(`this is sample value ${sample}`);