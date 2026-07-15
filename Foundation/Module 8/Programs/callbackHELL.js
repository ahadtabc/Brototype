function packBags(callback) {
  setTimeout(() => {
    console.log("1. Bags are packed.");
    callback();
  }, 1000);
}

function startTravel(callback) {
  setTimeout(() => {
    console.log("2. Vehicle is traveling...");
    callback();
  }, 2000);
}

function reachDestination(callback) {
  setTimeout(() => {
    console.log("3. Destination Reached.");
    callback();
  }, 1000);
}


packBags(() => {
  startTravel(() => {
    reachDestination(() => {
      console.log("4. Now ready to visit!");
    });
  });
});


// // -------------------------------------------------------------// the below is promise version of above
function packBags() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Bags are packed.");
      resolve();
    }, 1000);
  });
}

function startTravel() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Vehicle is traveling...");
      resolve();
    }, 2000);
  });
}

function reachDestination() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. Destination Reached.");
      resolve();
    }, 1000);
  });
}

packBags()
  .then(() => startTravel())
  .then(() => reachDestination())
  .then(() => {
    console.log("4. Now ready to visit!");
  })
  .catch((error) => {
    console.log("Something went wrong on the trip:", error);
  })
  .finally(()=>{
    console.log("Program Completed");
   
  })