let arr=["Audi","Benz","Bmw","Lexus"];

for(let i of arr){
    console.log(i+`.for Sale`)
}


let myObj={
    name:"Ahad",
    age:29,
    job:"Developer",
    place:"Kochi",
}

for(let x in myObj){
    console.log(myObj)
}

///////////////////////

function sum(num1,num2,...nums){
    let sum=null;
    for(let n of nums){
        sum+=n;
    }
    console.log(num1+num2+sum)
}

sum(10,22,100,200,300,400,500)