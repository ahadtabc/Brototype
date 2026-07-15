function pressMe() {
    document.getElementById("change").innerHTML = "Ahad";
    window.alert('You clicked the button');
}


let obj = { name: "Abdul Ahad", subject: "BCA", place: "Malappuram" }

for (let full in obj) {
    console.log(obj[full]);

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let fetch of arr) {
    console.log(fetch);

}


let stringway= "Abdul Ahad, Malappuram";

for (let fetch of stringway) {
    console.log(fetch);

}

sample();
function sample(){
    console.log("Welcome to Brototype");
    
}


planet();
let planet= ()=>{
    console.log("Welcome to the Planet of Earth");
    
}


console.log("One");

setTimeout(()=>{
console.log("Two");
},1000);

console.log("Three");

setTimeout(()=>{
console.log("Four");
},2000);

console.log("Five");


function display(callback){
    console.log("Start");

    setTimeout(()=>{
  callback();
    },2000)
  

    console.log("end");
    
}

let sample=()=>{
    console.log("This is Planet Earth");
}

display(sample);


function display(){
    return new Promise((resolve,reject)=>{
      if(3>5){
        setTimeout(()=>{resolve(`{"name":"Ahad", "age":"29"}`);
    })
}else{
    setTimeout(()=>{reject(`The Result is False`)})
}
    
}