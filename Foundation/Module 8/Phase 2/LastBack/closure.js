let count = 0;

function main() {
  count++;
  function Sub() {
    console.log(count);
  }
  return Sub();
}

main();

// A closure is a function that remembers and can access variables from
//  its outer (lexical) scope even after the outer function has finished executing.

//ഒരു function, അതിന്റെ പുറത്ത് (outer function) ഉള്ള variables, 
//ആ outer function execute ചെയ്തു കഴിഞ്ഞ ശേഷവും access ചെയ്യാൻ കഴിയുന്ന സംവിധാനത്തെയാണ് 
// Closure എന്ന് പറയുന്നത്.

function outer(){
    let message="Hello World";

    function inner(){
        console.log(message);
    }
    return inner;
}

const sample=outer();
sample();