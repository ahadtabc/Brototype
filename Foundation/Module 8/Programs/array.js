let arr=[99,99,50,50,13,13,13,40,40,40,40,99,50];




let res3=arr.reduce((acc,x)=>{
  if(!acc[x]){
    acc[x]=1;
  }else{
    acc[x]+=1;
  }
return acc
},{})
console.log(res3);



// let res2=arr.reduce((acc,x)=>{
//   if(!acc.includes(x)){
//     acc.push(x);
//   }
//   return acc;
// },[])
// console.log(res2)

let res4=arr.reduce((acc,x)=>{
    if(!acc.includes(x)){
        arr.push(x)
    }
    return acc;
},[]) 

console.log(res4)