function DestinationFunc() {
  console.log("Reached, Now Ready visit");
}

function MainFunc(callback) {
  console.log("Traveling to the Destination");
  setTimeout(() => {
    callback();
  }, 2000);
}

MainFunc(DestinationFunc);
// ----------------------------------------------
// function myfunA(callback) {
//   console.log("Function A");
//   callback();
// }

// function myfunB() {
//   console.log("Function B");
// }

// myfunA(function () {
//   console.log("TEST");
// });
// -------------------------------------------------

// Callback എന്നത് ഒരു function മറ്റൊരു function-ന് argument ആയി നൽകുന്നതാണ്. പ്രധാന task പൂർത്തിയായതിന് ശേഷം ആ function വിളിക്കപ്പെടുന്നു.\
// ----------------------------------callback

// function sampleUser(name) {
//   console.log("Hello " + name + "!");
// }

// function processing(callback) {
//   console.log("Fetching User data...");
//   let userName = "Ahad";
//   callback(userName);
// }

// processing(sampleUser);
