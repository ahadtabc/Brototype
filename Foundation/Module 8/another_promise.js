// let test={};

// console.log(test.address?.city);

// let info={
//     name:"Ahad",
//     age:"29",
//     address:{city:"malappuram"}
// }

// console.log(info.address.city)
// console.log(info.address.pin?.number);

// let age = null;

// console.log(age ?? 18);

let mypromsie = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Verified");
  } else {
    reject("Failed");
  }
});

mypromsie
  .then((message) => {
    console.log("This is (then) " + message);
  })
  .catch((message) => {
    console.log("This is (catch) " + message);
  });

const userLeft = false;
const userWatchCatMeme = true;
function watchPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":( ",
      });
    } else if (userWatchCatMeme) {
      reject({
        name: "User Watching cat meme",
        message: "😊 Happy Now",
      });
    } else {
      resolve("Make to Subscribe");
    }
  });
}

watchPromise()
  .then((message) => {
    console.log("Success" + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
