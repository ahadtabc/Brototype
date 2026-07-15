// 1. Rest Parameter
// A Rest Parameter collects multiple function arguments into a single array. 
// It allows a function to accept any number of arguments.

// Rest Parameter എന്നത് function-ലേക്ക് വരുന്ന നിരവധി arguments-നെ 
// ഒരു array ആയി ശേഖരിക്കുന്നതാണ്

// function show(first,second,...others){
//     console.log(first)
//     console.log(second)
//     console.log(others)
// }
 
// show("Ahad","Nabhan","Akhil","Musthafa","Niyas","Shamil")

// 2. Rest Operator (Rest Element)
// Definition (English)

// The Rest Operator (Rest Element) collects the remaining 
// elements of an array or the remaining properties of an object into a new array or object during destructuring.
//Array അല്ലെങ്കിൽ Object destructuring ചെയ്യുമ്പോൾ ബാക്കിയുള്ള values ഒരു പുതിയ array അല്ലെങ്കിൽ 
//object-ലേക്ക് ശേഖരിക്കുന്നതാണ് Rest Operator (Rest Element).
let myobj={
    name:"Ahad",
    location:"Malappuram",
    stack:"Mern",
    module:8
}

let {name,location,...others}=myobj;

console.log(name);
console.log(others)


