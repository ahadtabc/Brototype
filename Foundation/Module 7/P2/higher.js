let brand=[{
    model:"m5",
    year:2020,
    color:"purple"
},
{
    model:"m3",
    year:2018,
    color:"Black"

},
{
    model:"m4",
    year:2025,
    color:"blue"
},
{
    model:"m2",
    year:2020,
    color:"Black"

}];

const newArray=brand.map((value)=>{
     return value.model
})

// console.log(newArray);
-----------------------------------------------Map(binary converaion)

const arr = [1, 2, 3, 4, 5, 6, 7];

function myfun(x) {
  return x.toString(2);
}
const output = arr.map(myfun);

console.log(output);
=============================================
const arr = [1, 2, 3, 4, 5, 6, 7];

const output = arr.map((x=>x).toString(2));

console.log(output);
--------------------------------------------------
 const arr = [1, 2, 3, 4, 5, 6, 7];

 const newArr=arr.map((x)=>x*3);

 console.log(newArr);
 ================================================

const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr = arr.filter((x)=>x%2===0);

console.log(newArr)
 ================================================ filter (even)
const arr = [1, 2, 3, 4, 5, 6, 7];

const newArr=arr.filter((x)=>x%2!==0);

console.log(newArr)
 ================================================ filter (odd)

 const arr = [1, 2, 3, 4, 5, 6, 7];

 const newArr=arr.filter((x)=>x>4)

console.log(newArr)
 ================================================ filter (greaterthan)

const arr = [1, 2, 3, 4, 5, 6, 7];

const newOut = arr.reduce((acc, curr) => acc + curr,0);
console.log(newOut)
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==reduce (sum)

const arr = [1, 2, 3, 4, 5, 6, 7];

const newOut = arr.reduce((acc, curr) => Math.max(acc,curr),arr[0]);
console.log(newOut)

// -------------------------------------------------------------------------------Reduce(max)

const obj = [
  { firstName: "Abdul", lastName: "Ahad", age: 29 },
  { firstName: "Elon", lastName: "Musk", age: 52 },
  { firstName: "APJ", lastName: "Kalam", age: 85 },
  { firstName: "Mukesh", lastName: "Ambani", age: 52 },
];

const output = obj.reduce((acc, curr) => {
if(acc[curr.age]){
    acc[curr.age]=++acc[curr.age];
}else{
    acc[curr.age]=1;
}return acc;
},{});

// const output = obj.map((x) => x.firstName + " " + x.lastName + " " + x.age);

console.log(output);

