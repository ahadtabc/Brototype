// async and await are JavaScript keywords used to write asynchronous code in a synchronous. They simplify working
// with Promises and make asynchronous code easier to read and maintain.

// async function greet() {
//     return "Hello World";
// }

// console.log(greet());

// --------------------------------------
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data is Recived");
    }, 2000);
  });
}

async function getmyData() {
  const final =await fetchData();
  console.log(final);
}

getmyData();
