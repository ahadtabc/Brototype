function outer(){
    let sample=500;

    function inner(){
        console.log(sample)
    }
    return inner;
}

const final =outer();

final();