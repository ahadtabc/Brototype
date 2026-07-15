document.getElementById("btn").onclick=myfunction;

function myfunction(ahad){

    console.log(ahad);
    
}

myfunction(20);
------------------------------------------call back


const arr=[1,2,3,4,5,6,7,8,9];


arr.forEach(function (ahad){
    console.log(ahad);
    
})

or

function myfunction(argu){

    console.log("Planet",argu);

}

const arr=[1,2,3,4,5];

arr.forEach(myfunction);

---------------------------------------------for-each


const arr=[1,2,3,4,5];

arr.forEach(function (argu){
     console.log("Planet",argu);
});
--------------------------------------------anonymous fun

const obj={
    a:10,
    b:20,

    myfun: function(){
        return this.a+this.b;
        
    }
}

console.log(obj.myfun());
--------------------------------------------------------this work anony fun

const obj={
    a:10,
    b:20,

    myfun: ()=>{
        return this.a+this.b;
        
    }
}

console.log(obj.myfun());
---------------------------------------------------------------this not work arrow fun

function one(){
var a=100;
two(a);
console.log('One',a);

}

function two(a){
a=a+1;

console.log('Two',a);
}

one();

---------------------------------------------------------------pass by value (for primative)

function one(){
    var a={
        value:100,
    };
    two(a);
    console.log('One',a.value);
}

function two(a){

    a={
        value:200,
    };
 console.log('Two',a.value);
}

one();

---------------------------------------------------------------pass by reference (for non-primartive)

function add(a,b){
function myAdd(){
   const c= a+b;
   return c;
}
return myAdd;
}

function main(){
    const result=add(5,10);
    const val=result();
    console.dir(result);
}

main();

---------------------------------------------------------------closure

var obj =[
    {
        name:'One',msg:'Hello One'
    },
    {
        name:'Two',msg:'Hello Two'
    },
    {
        name:'Three',msg:'Hello Three'
    },
];

function main(){
obj.forEach((item)=>{
    const btn=document.createElement('button');
    btn.innerHTML=item.name;
    btn.onclick=getCallback(item.msg);
    document.body.appendChild(btn);
});
}

function getCallback(arg){
    return function(){
    alert(arg);
    }

}

main();

---------------------------------------------------------------closure

var obj={
    a:1,
    b:2,
    c:"Sample_TEXT"
};

var obj2={
    ...obj
}


console.log(obj);
console.log(obj2);

console.log(obj===obj2);


---------------------------------------------------------------spred (clone)

var obj={
    name:'Ahad',
    age:29,
    place:'MPM'
};

function myfun(){

    // const name =obj.name;
    // const age =obj.age;
    // const place =obj.place;
    const{
        name,
        age,
        place
    }=obj;

    console.log(name,age,place);
}

myfun();


---------------------------------------------------------------De-Structure


let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];

let combine=[...arr1,...arr2];

console.log(combine);

let a = 10,b = 25, c = 15;

// Using a nested ternary operator to find the largest number
let largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

console.log(`The largest number ${largest}`);


const planet="Earth";

function myfun(planet){
    console.log( 'Hello '+planet);
}

myfun(planet)