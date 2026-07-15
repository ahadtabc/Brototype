// function myfun() {
// var laptop = "swfit-3";
// console.log(laptop);
// }

// myfun();

// let myfunc=(params) =>
//   console.log("My Laptop is Acer",params);


// myfunc(0)

// const arr=[,1,2,3,4,5,6,7];

// arr.forEach(myfunc);

// const obj={
//     year:2026,
//     module:7,
//     myFunc:function(){
//         return this.year+this.module;
//     }
// }

// const newly =obj.myFunc;
// console.log(obj.myFunc());

// newly(obj.myFunc());

const obj={
    year:2026,
    module:7,
    myFunc:function(){
       console.log(this);
    }
}

obj.myFunc=obj.myFunc.bind(obj);

const newObj={
    a:10,
    b:15
};

var newly=obj.myFunc;

newly.call(obj);

