// this
// console.log(this)

// function getName(){
//  console.log(this)
// }

// function getName(){
//      console.log(this.name)
//      console.log(this.age)
    
//     } 

// const person1={
//     name:"Ahad",
//     age:29,
//     method:getName
   
// }

// const person2={
//     name:"Nabhan",
//     age:23,
//     method:getName

// }

// person1.method()
// person2.method()

// ----------------------------------------------------------------this keyword concept
// function getName(place,job){
//      console.log(this.name)
//      console.log(this.age)
//      console.log(place)
//      console.log(job)

    
//     } 

// const person1={
//     name:"Ahad",
//     age:29,
  
// }
// getName.call(person1,"Kochi","Mern Stack Developer")


// ------------------------------------------call concept (refer with selected object works a string only)

// function getName(place,country){
//      console.log(this.name)
//      console.log(this.age)
//     console.log(place)
//     console.log(country)

    
//     } 

// const person1={
//     name:"Ahad",
//     age:29,
  
// }
// // getName.apply(person1,["Kochi", "India"]);


// const details = ["Kochi", "India"];

// getName.apply(person1,details);

// ------------------------------------------apply concept (refer with selected object and also it only work as array)
function getName(){
     console.log(this.name)
     console.log(this.age)
  
    } 

const person1={
    name:"Ahad",
    age:29,
  
}
const result=getName.bind(person1);
result();

// ------------------------------------------bind( it is not direclty invoke, but it return a function )

// class User{
//     constructor(name){
//         this.name="Abdul Ahad";
//     }

//     getName(){
//         return this.name;
//     }
// }

// const user1 =new User();

//  const finalRes=user1.getName.bind(user1);
// console.log(finalRes());

// ------------------------------------------bind( real use case)
 
// const person1={
//     name:"Ahad",
//     age:29,
//     method(){
//         const getName=()=>{
//             return this;
//         }
//         return getName;
//     }
// }

// const finalName=person1.method()

// console.log(finalName());
// ___________________________________________________this using arrow function