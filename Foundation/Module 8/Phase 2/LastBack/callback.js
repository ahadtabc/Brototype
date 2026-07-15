// callback function is function that is passed as argument to another function and executed later, when the
// task is completed

// function myFun(name, callback) {
//   console.log(`Hello ${name}`);
//   callback();
// }

// function bye() {
//   console.log("Bye Bye");
// }

// myFun("Ahad", bye);

// -----------------------------------------
// function Main(name){
//     console.log(`Hello ${name}`)
// }

// function Sub(callback){
//     callback("Abdul Ahad")
// }

// Sub(Main)

// // -----------------------------------------
// Anonymous Callback:-
// function calculate(a,b,callback){
//     callback(a,b);
// }

// calculate(150,200, function(x,y){
//     console.log(x+y)
// })

// // -----------------------------------------
// function Program(callback){
//     console.log("File is Downloading... Please Wait Some Seconds")

//     setTimeout(()=>{
//         console.log("Download is Completed")
//         callback();
//     },2000)
// }

// Program(()=>{
//     console.log("Installing the application")
// })
// ...........................................................

// function dataBase(callback) {
//   22``;
//   console.log("Fetching data from server... Please wait");

//   setTimeout(() => {
//     let data = {
//       name: "Abdul Ahad",
//       place: "Malappuram",
//       job: "FullStack Developer",
//       mobile: 9074243208,
//     };
//     callback(data);
//   }, 3000);
// }

// dataBase((user) => console.log("Data is Fetched Complete \n", user));

// -------------------------------------------------------------

function Finder(num, callback) {
  let res = num % 2 == 0 ? "Even" : "Odd";
  callback(res);
}

function display(finalRes) {
  console.log(finalRes);
}

Finder(6, display);
