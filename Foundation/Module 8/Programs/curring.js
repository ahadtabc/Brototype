function first(a1){
  return function second(b1){
    return function third(c1){
      return a1+b1+c1;
    }
  }
}

console.log(first(11)(22)(33))