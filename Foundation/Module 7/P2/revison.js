const arr = [1, 2, 3, 4, 5];

let result=arr.map(x=>x*2)

let result =arr.filter(x=>x%2!==0)

let result=arr.filter(x=>x>2)

let result = arr.reduce((acc, curr)=>acc+curr,0);

console.log(result);
// ==========================================array methods

let sample=new Set([1,1,2,3,4,5,5]);

console.log(sample);

const set = new Set([1, 2, 2, 3]);

console.log(set);
// Set(3) {1, 2, 3}


const map = new Map();

map.set("name", "Ahad");
map.set("age", 25);

console.log(map.get("name"));
console.log(map.get("age"))


function a(){
    let value=100;
     function b(){
        console.log(value);
    }

    b();
}

a()     //clousre


//curring
function first(a){
    return function second(b){
        return function third(c){
            return a+b+c;
        }
    }
}

console.log(first(10)(20)(30));




