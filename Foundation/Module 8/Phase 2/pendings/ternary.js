// if...else vs Ternary Operator (? :)

// Both if...else and the ternary operator are used to make decisions based on a condition. The main difference is that if...else is a statement,
// while the ternary operator is an expression.

// both syntax is `check condition' ther decide true or false

// Feature	            if...else	                                 Ternary Operator (? :)
// Type	                Statement	                                  Expression
// Syntax	            Longer	                                      Shorter
// Best for	    Multiple statements, complex logic	            Simple conditions and assigning values
// Returns a value	    No	                                                Yes
// Readability     	Better for complex code	                  Better for simple one-line conditions

// let num=-9;
// if(typeof  num ==="number" && !Number.isNaN(num)){

// if(num>0){
//     console.log("Positive");
// }else if( num ===0){
//     console.log("It is Zero");
// }else{
//     console.log("Negative");
    
// }
// }else{
// console.log("Sorry it is NaN")
// }
// --------------------------------

function checkNum(num){
    return typeof num !=="number" || Number.isNaN(num)?"Sorry it is NaN"
    :num>0?"Positive"
    :num<0?"Negative":"It is Zero"
}

console.log(checkNum("test"))

function largest(a,b,c){

return a>b?
(a>c?"a":"c")
:(b>c?"b":"c")
}
console.log(largest(100,20,30))
