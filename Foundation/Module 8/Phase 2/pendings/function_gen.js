function* reverseMulti(){
    for(let i=100; i>1; i--){
        if(i%5==0){
        yield i;
        }
    }
}

let gen=reverseMulti();

for (let x  of gen){
    console.log(x)
}


// what is function generatuon
// A Generator Function is a special function declared with function* 
// that can pause its execution using yield and resume later using the next() method. 
// It generates values one at a time instead of returning them all at once.