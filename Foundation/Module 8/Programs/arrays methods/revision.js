let arr=[1,2,3,0,4,5,0,6,7,0,8,9]

let final=arr.reduce((acc,x)=>{
    if(x==0){
        acc.unshift(x);
    }else{
        acc.push(x);
    }
    return acc;
},[])

console.log(final)

