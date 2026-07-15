console.log("First");
setTimeout(()=>{
    window.alert("second");
},2000);

console.log("Third");

document.getElementsByClassName('head2')[0].innerText="EARTH";

var head2=document.getElementById("head2")
head2.style.fontFamily ="arial";
head2.style.color ="Green";
head2.style.fontSize ="129px";
head2.style.backgroundColor="orange";

let a="ahad t";

// console.log(a.length);
console.log(a.indexOf("a"));
console.log(a.lastIndexOf("a"));
console.log(a.includes("a"));
console.log(a.slice(0,4)); //extraction INDEX (start,end)

let b=a.slice(0,6);//extraction INDEX (start,end)
console.log(b);

let c=a.slice(-6);
console.log(c);

let x="99";
let y=10;


console.log(typeof parseInt(x));
console.log(typeof y.toString());
document.getElementById('head2').style.color ="red";


let arr=["A","B","C"];

arr.splice(0,1);

console.log(arr);


let study={
    type:"mern",
    module:7
}

let study2={
    type:"Django",
    module:5
}


let user1={...study};

let user2=Object.assign({},study)

user1.module=2;
console.log(user1)
console.log(study);
console.log(study2);


let batch1=["Ahad","Nabhan","Akhil"];
let batch2=["Musthafa","Niyas","Shamil"];

let Brototype=batch1.concat(batch2);
let Brototype=[...batch1,...batch2];
console.log(Brototype);

const [first,second,third]=batch1;

console.log(third,second,first);

const Brand={
    model:"5 Series",
    color:"Red",
    Year:2023,
}

const {model,...rest}=Brand;

console.log(model);
console.log(rest);

function myfun(){
    console.log("name func TESTING");
}

myfun();


let myVar= ()=>{
    console.log("arrow func TESTING");
}

myVar();

let brand=[{
    model:"m5",
    year:2020,
    color:"purple"
},
{
    model:"m3",
    year:2018,
    color:"Yellow"

},
{
    model:"m4",
    year:2025,
    color:"blue"
}]

for(let i=0; i<brand.length; i++){
    console.log(brand[i]);
}

brand.forEach(function(value,index,array){
    console.log(index);
})

brand.forEach((value,index,array)=>{
    console.log(value.year);
})


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

const newArray=brand.filter((value)=>
    value.year===2020 && value.color==="Black"
);

console.log(newArray);

const arr=[1,2,3,4,5,6,7,8,9,10];

let total=0;

for(let i=0; i<arr.length; i++){
    total+=arr[i];
}
console.log(total);

let newArray=arr.reduce((total,value)=>total+value,0)

console.log(newArray);

find

 let brand=[{
    model:"m5",
    year:2020,
    color:"purple"
},
{
    model:"m3",
    year:2018,
    color:"Back"

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

const newObj=brand.find((value)=>value.year===2018)

console.log(newObj);

sort
const num=[10,5,20,15,45,13,100,50,11,40];

const newNum=num.sort((a,b)=>a-b);
console.log(newNum);

flat
const num=[10,5,[20,[15, 20,[30,33]]],45,13,[100,50],11,40];

const flattern=num.flat(Infinity);
console.log(flattern);
