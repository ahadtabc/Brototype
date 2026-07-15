function mySample() {
  return new Promise((resolve, reject) => {
    console.log("Fetching...data...");

    setTimeout(() => {
      success ? resolve("Fetching is Success") : reject("Error: Not Fetched");
    }, 2000);
  });
}

mySample(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Program is Completed"));

//   A Promise is an object in JavaScript that represents the eventual completion (success) 
// or failure of an asynchronous operation and its resulting value.

// A Promise has three states:

// Pending – Initial state (operation is still running).
// Fulfilled (Resolved) – Operation completed successfully.
// Rejected – Operation failed.


let myPromise = new Promise((resolve, reject) => {
    let age = 20;

    if (age >= 18) {
        resolve("You are eligible to vote.");
    } else {
        reject("You are not eligible to vote.");
    }
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });