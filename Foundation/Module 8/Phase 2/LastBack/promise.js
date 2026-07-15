// promise is an object in javascript, it represent an eventual success or failure of an asyncrounus opertaion


// let mypromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Downloading.....");
//   } else {
//     reject("Failed to Download");
//   }
// });

// mypromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Program is Completed"));


// pending:-
// let mypromise =new Promise((resolve,reject)=>{
//     console.log("loading...")
// })

// fullfiled:-
// let mypromise =new Promise((resolve,reject)=>{
//     console.log("Success")
// })

// mypromise.then((result)=>console.log(result));


// failure:-
// let mypromise =new Promise((resolve,reject)=>{
//     console.log("Network Down, Internet Lost")
// })

// mypromise.catch((error)=>console.log(error));

//promiseall() is takes multiple promises and returns one promise .It resolve only when  all promises are fulfilled.
// anyone promise reject, it immediately rejects.
// Promise.all() നിരവധി promises സ്വീകരിക്കുന്നു. എല്ലാ promises-ഉം വിജയിച്ചാൽ മാത്രം resolve ചെയ്യും.
//ഒരു promise എങ്കിലും reject ആയാൽ ഉടനെ reject ചെയ്യും.

// const p1= Promise.resolve("Ahad");
// const p2= Promise.reject("Nabhan");
// const p3= Promise.resolve("Akhil");

// Promise.all([p1,p2,p3])
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))
// -------------------------------------------------------------------------
// Promise.allSettled() wait until promises finish,whether they reolve or PromiseRejectionEvent,It never rejects
// എല്ലാ promises-ഉം തീരുന്നത് വരെ കാത്തിരിക്കും. Resolve ആയാലും Reject ആയാലും എല്ലാ ഫലങ്ങളും നൽകും.

// const p1 = Promise.resolve("Login Success");
// const p2 = Promise.reject("Payment Failed");
// const p3 = Promise.resolve("Profile Loaded");

// Promise.allSettled([p1, p2, p3])
// .then(result => console.log(result))
// -----------------------------------------------------------------------

// Promise.race() return the result of the first settled promise whether it resolves or reject
// ആദ്യം resolve അല്ലെങ്കിൽ reject ചെയ്യുന്ന promise-ന്റെ ഫലം മാത്രം നൽകും.

// const p1 = new Promise(resolve => {
//     setTimeout(() => resolve("HTML"), 3000);
// });

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("CSS"), 1000);
// });

// Promise.race([p1, p2])
// .then(result => console.log(result));

// ----------------------------------------------------------------------------------------------------------

// Promise.any() Promise.any() resolves with the first fulfilled promise. It ignores rejected promises. 
// If all promises reject, it rejects with an AggregateError.

// ആദ്യം വിജയിക്കുന്ന promise-ന്റെ value നൽകും. Reject ആയ promises അവഗണിക്കും. 
// എല്ലാ promises-ഉം reject ആയാൽ മാത്രം AggregateError നൽകും.

// const p1 = Promise.reject("Server 1 Failed");

// const p2 = new Promise(resolve => {
//     setTimeout(() => resolve("Server 2 Success"), 2000);
// });

// const p3 = Promise.reject("Server 3 Failed");

// Promise.any([p1, p2, p3])
// .then(result => console.log(result))
// .catch(error => console.log(error));
// -------------------------------------------------------------
// Promise Chaining:-
// promise chainig is technique where muliple async operations are executed one after another by returning a promise form
// each .then method.|
// Promise Chaining എന്നത് ഒന്നിലധികം asynchronous operations ക്രമമായി (sequence) പ്രവർത്തിപ്പിക്കുന്ന രീതിയാണ്. ഓരോ .then()-ൽ നിന്നും ഒരു promise return ചെയ്യുകയും 
// അടുത്ത .then() അതിന്റെ result സ്വീകരിക്കുകയും ചെയ്യും.

// function step1(){
//     return Promise.resolve("Step 1 is Completed");
// }

// function step2(message){
//     console.log(message)
//     return Promise.resolve("Step 2 is Completed")
// }

// function step3(message){
//     console.log(message)
//     return Promise.resolve("Step 3 is Completed")
// }

// step1()
// .then((result)=>step2(result))
// .then((result)=>step3(result))
// .then((result)=>console.log(result))
// .catch((error)=>console.log(error))

function login(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Login Successful")
            resolve(101)
        }, 1000);
    })
}

function getProfile(userId){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Profile loaded")
            resolve({
                id:userId,
                name:"Ahad"
            })
        }, 1000);
    })
}

function getOrders(user){
   return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Order Loaded")
            resolve({
                user:user.name,
                order:["Macbook","iPhone"]
            })
        }, 1000);
    })
}

function logout(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Logout Successful")
            resolve(data)
        }, 1000);
    })
}

login()
.then(userId=>getProfile(userId))
.then((profile)=>getOrders(profile))
.then((orderData)=>logout(orderData))
.then(finalData=>console.log(finalData))
.catch((error)=>console.log(error))