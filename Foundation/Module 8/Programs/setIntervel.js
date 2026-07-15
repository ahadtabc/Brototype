let num = 1;

let sample = setInterval(() => {
  console.log(num);
  num++;
  if (num > 7) {
    clearInterval(sample);
    console.log("Set Intervel Stopped");
  }
}, 1000);


// ------------------------------------ settimeout

// console.log('Start');
// setTimeout(()=>{
//     console.log("I am Asyncrous")
// },2000)

// console.log("Ended")