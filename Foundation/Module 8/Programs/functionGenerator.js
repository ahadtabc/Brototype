function * fibno(termCount){
    let a=1;
    let b=1;
    yield a;
    yield b;
    let count=0;
    while(count<termCount){
        c=a+b;
        a=b;
        b=c;
        count++;
        yield c;
    }
    return c;
} 

let series=fibno(5)
console.log(series.next())
console.log(series.next())
console.log(series.next())
console.log(series.next())
console.log(series.next())
