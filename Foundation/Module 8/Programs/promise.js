let testPromise = new Promise((resolve, reject) => {
  if (4 === 2 + 2) {
    resolve();
  } else {
    reject();
  }
});

testPromise
  .then(() => {
    console.log("Promise Success");
  })
  .catch(() => {
    console.log("Promise Failed");
  });

// Definition:A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

let myPromise = new Promise((resolve, reject) => {
  console.log("Starting the task.....");

  setTimeout(() => {
    let isSuccessful = true;

    if (isSuccessful) {
      resolve("Data is downloaded is successfully");
    } else {
      reject("Network error");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log("Success", result);
  })
  .catch((error) => {
    console.log("Failed", error);
  })
  .finally(() => {
    console.log("Task is Finished");
  });
