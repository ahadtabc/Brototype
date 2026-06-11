## 1. Javascript:

JavaScript is a high-level, interpreted, single-threaded programming language that is synchronous by default but supports asynchronous programming, widely used to build interactive and dynamic web applications.

- **High level language:**
    - Human readable syntax
    - Garbage collection : automatic memory management
    - Built in abstractions : Strings , Arrays , Objects.
- **Interpreter not compiler:**
    - An interpreted language is one where the code is executed line by line by an interpreter, without needing a separate compilation step (like in C or Java).
    - You don’t need to compile it into machine code manually.
    
    ---
    
- **Single Threaded:**
    - **Single-threaded** = JavaScript has **only one main thread** that executes code **line by line** in order.
    - It can **do only one task at a time** in that thread.
- **Synchronous:**
    - Tasks are executed **one after another** in the exact order they appear.
    - Each task **must finish before the next one starts**.
    - If a task takes a long time (like reading a big file or waiting for a server response), the whole program is **blocked** until that task completes.
- **Dynamic typing:**
    - variable type is decided at runtime.
- **Prototype-based OOP:**
    - objects can inherit from other objects.
- **Event-driven + Asynchronous:**
    - can handle events and background tasks.

## 2. Variables:

- var**:**
    - Function-scoped.
    - Can be **re-declared** and **updated**.
    - Hoisted (moved to top in memory but without value).
- **let:**
    - Block-scoped (`{ }`).
    - Can be **updated**, but not **re-declared** in the same scope.
    - Hoisted but **not initialized** → Temporal Dead Zone (TDZ).
- **const:**
    - Block-scoped.
    - **Must be initialized** at declaration.
    - Cannot be reassigned.
    📌 Note: If `const` is an **object/array**, the reference is fixed, but internal values can change:

## 3. Data Types:

- **Primitive Types (Immutable):**
    - Number → `let a = 5;`
    - String → `let s = "Hello";`
    - Boolean → `true/false`
    - Null → empty value (typeof is `"object"` → JS bug)
    - Undefined → variable declared but not assigned
    - Symbol → unique identifier (used rarely)
    - BigInt → very large numbers (e.g., `123n`)
- **Non-Primitive (Reference Types):**
    - Object
    - Array
    - Function
- 📌 Difference:
    - Primitive → stored **by value**.
    - Reference → stored **by reference** (memory address).

## 4. Operators:

- **Arithmetic Operators:**
    - Addition (+)
    - Subtraction (-)
    - Modulus(%)
    - power(**)
- **Assignment Operators:**
    - = (Assign)
    - += (Add and assign)
    - -= (Subtract and assign)
    - *= (Multiply and assign)
    - /= (Divide and assign)
    - %= (Modulus and assign)
    - **= (Exponent and assign)
    
    ---
    
- **Comparison Operators:**
    - == (Equal, loose → checks value only)
    - === (Strict equal → checks value + type)
    - != (Not equal)
    - !== (Strict not equal)
    - > (Greater than)
    - < (Less than)
    - >= (Greater than or equal)
    - <= (Less than or equal)
- **Logical Operators:**
    - && (AND → true if both true)
    - || (OR → true if at least one true)
    - ! (NOT → reverses result)
- **Bitwise Operators**
    - & (AND)
    - | (OR)
    - ^ (XOR)
    - ~ (NOT)
    - << (Left shift)
    - >> (Right shift)
    - >>> (Unsigned right shift)
- **Ternary Operator:**
    
    `condition ? valueIfTrue : valueIfFalse`
    
- **Type Operator (`typeof`):**
    - The `typeof` operator is used to check the **data type** of a value or variable.
- **Delete Operator (`delete`):**
    - The `delete` operator is used to **remove a property from an object**.
- **Spread Operator (`...`):**
    - The **spread operator** expands (spreads out) the elements of an array or properties of an object.
- **Rest Operator (`...`):**
    - The rest operator collects multiple values into a single array or object.
    - It’s mainly used in functions to take unlimited arguments.

## 5. Conditions:

- **if:**
    - Runs a block of code if the condition is true.
    
    ```jsx
    let age = 18;
    if (age >= 18) {
    console.log("You are an adult");
    }
    ```
    
- **if…else:**
    - Runs one block if condition is true, another if false.
    
    ```jsx
    let age = 16;
    if (age >= 18) {
    console.log("You are an adult");
    } else {
    console.log("You are a minor");
    }
    ```
    
- **else if ladder:**
    - Checks multiple conditions in sequence.
    
    ```jsx
    let marks = 75;
    if (marks >= 90) {
    console.log("Grade A");
    } else if (marks >= 60) {
    console.log("Grade B");
    } else {
    console.log("Grade C");
    }
    ```
    
- **Ternary Operator ( ? : ):**
    - Shorthand for `if...else`.
    
    ```jsx
    let age = 20;
    let result = (age >= 18) ? "Adult" : "Minor";
    console.log(result);
    ```
    
- **switch:**
    - Used when you have multiple possible values for one variable.
    
    ```jsx
    let day = 3;
    switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    default: console.log("Invalid day");
    }
    ```
    

## 6. Loops:

- **for loop:**
    - Runs a block of code a specific number of times.
    
    ```jsx
    for(let i = 0; i <= 5; i++){
        console.log(i); // prints 0 to 5
    }
    ```
    
- **while loop:**
    - Runs until a condition becomes false.
    
    ```jsx
    let i = 0;
    while(i < 5){
        console.log(i);
        i++;
    }
    ```
    
- **do...while loop:**
    - Runs at least once, then repeats while condition is true.
    
    ```jsx
    let i = 0;
    do{
        console.log(i);
        i++;
    } while(i < 5);
    ```
    
- **for...in loop:**
    - Iterates over object **keys**.
    
    ```jsx
    let obj = {name: "Rimu", age: 19};
    for(let key in obj){
        console.log(key, obj[key]);
    }
    ```
    
- **for...of loop:**
    - Iterates over iterable objects (like arrays, strings).
    
    ```jsx
    let arr = [10, 20, 30];
    for(let value of arr){
        console.log(value);
    }
    ```
    

## 7. Functions:

- A function is a block of code that performs a specific task.
- It makes code reusable, organized, and easy to debug.
- Function Declaration:
    - Normal case, declaring a function.
    - returns the value , with argument
    
    ```jsx
    function add(a, b) {
        return a + b;
    }
    console.log(add(5, 3)); // 8
    ```
    
- **Function Expression:**
    - Declaring a function to a variable
    
    ```jsx
    let multiply = function(a, b) {
        return a * b;
    };
    console.log(multiply(4, 2)); // 8
    ```
    
- **Arrow Functions:**
    - An arrow function is a shorter way of writing a function in JavaScript.
    - It was introduced in ES6 (2015) and is mostly used when we need small, simple functions.
    
    ```jsx
    let divide = (a, b) => a / b;
    console.log(divide(10, 2)); // 5
    
    /* Key Differences (vs Normal Functions)
    1.  No **`function` keyword** → Shorter syntax.
    2. **`this` binding** → Arrow functions do **not** have their own `this`.
        - They use `this` from the outer scope.
        - This makes them useful inside objects or callbacks. */
    ```
    
- Anonymous Function:
    - Function without a name, often used in callbacks.
    
    ```jsx
    setTimeout(function() {
        console.log("This runs after 2 seconds");
    }, 2000);
    ```
    
- **Default Parameters:**
    - Basic
    
    ```jsx
    function greet(name = "Guest") {
        return "Hello, " + name;
    }
    console.log(greet());       // Hello, Guest
    console.log(greet("Rimu")); // Hello, Rimu
    ```
    
- Rest Parameter (`...`):
    - The rest parameter allows a function to accept an indefinite number of arguments as an array.
    - It is written using three dots ... before the parameter name.
    
    ```jsx
    function sum(...numbers) {
        return numbers.reduce((a, b) => a + b, 0);
    }
    console.log(sum(1, 2, 3, 4)); // 10
    ```
    
- **Returning Functions:**
    - In JavaScript, a function can return another function.
    - This is possible because functions are treated as first-class citizens (they can be assigned to variables, passed as arguments, or returned from other functions).
    
    ```jsx
    function outer() {
        return function inner() {
            return "Hello from inner!";
        }
    }
    let fn = outer();
    console.log(fn()); // Hello from inner!
    ```
    
- Spread Operator in Function Call
    - It is used to **expand** an array, string, or object into individual elements.
    - Looks same as **rest parameter (`...`)** but works in the **opposite way**.
    
    ```jsx
    function add(a, b, c) {
      return a + b + c;
    }
    const nums = [1, 2, 3];
    console.log(add(...nums));
    ```
    

## 8. Closures:

- A **closure** is created when a function "remembers" variables from its **outer scope**, even after that outer function has finished executing.
- Closure = Function + Lexical Scope (remembers variables from parent scope even after parent is gone).
- Example 1 - Basic Closure:
    
    ```jsx
    function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    
    return inner;
    }
    
    let counter = outer();   // outer() returns inner()
    counter();  // 1
    counter();  // 2
    counter();  // 3
    ```
    
    - Even though `outer()` has finished, the `inner()` function still remembers `count`.
- Example 2 – Closure for Private Variables:
    
    ```jsx
    function bankAccount() {
    let balance = 1000;  // private variable
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            balance -= amount;
            return balance;
        },
        checkBalance: function() {
            return balance;
        }
    };
    }
    
    let myAccount = bankAccount();
    console.log(myAccount.deposit(500));   // 1500
    console.log(myAccount.withdraw(200));  // 1300
    console.log(myAccount.checkBalance()); // 1300
    ```
    
    - Here, `balance` is **not directly accessible**. It’s hidden using closure.
- **Why Closures are Important?**
    - Data privacy → Protects variables (like private variables in OOP).
    - Stateful functions → Keeps track of values across function calls.
    - Callbacks & Event Handlers → Commonly used in JS.
    - Functional programming → Helps build advanced concepts like currying.

## 8. Hoisting:

- Hoisting is JavaScript’s default behaviour of **moving function and variable declarations to the top of their scope** (before code execution).
- Only **declarations** are hoisted, not **initializations**.
- **Variable Hoisting:**
    - `var` is hoisted (declared first), but value is assigned later.
    
    ```jsx
    console.log(a); // undefined
    var a = 10;
    ```
    
    - `let` and `const` are also hoisted but stored in a **temporal dead zone (TDZ)** → accessing them before declaration gives an **error**.
    
    ```jsx
    console.log(x); // ❌ ReferenceError
    let x = 5;
    
    console.log(y); // ❌ ReferenceError
    const y = 20;
    ```
    
    - The **Temporal Dead Zone (TDZ)** is the time between when a variable is **declared** and when it is **initialized**, during which it **cannot be accessed**.
- **Function Hoisting:**
    - **Function Declaration (hoisted)**
        
        ```jsx
        sayHello(); // ✅ Works
        
        function sayHello() {
          console.log("Hello!");
        }
        ```
        
    - **Function Expression (not hoisted)**
        
        ```jsx
        greet(); // ❌ Error
        
        var greet = function() {
          console.log("Hi!");
        };
        ```
        
    - **Arrow Function (not hoisted)**
        
        ```jsx
        hello(); // ❌ Error
        
        const hello = () => console.log("Hey!");
        ```
        

## 9. Arrays and Array Methods:

- An **array** is a collection of values of same datatypes stored in a single variable.
- Values can be numbers, strings, objects, or even other arrays.
- Arrays are **zero-indexed** → first element starts at index `0`.

```jsx
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry
```

- **Basic Array Methods:**
    - **`push()`** → Adds element(s) to the **end** of array.
        
        ```jsx
        arr.push(4); // adds 4 at end
        ```
        
    - **`pop()`** → Removes element from the **end**.
        
        ```jsx
        arr.pop(); // removes last element
        ```
        
    - **`unshift()**` → Adds element(s) to the **start**.
        
        ```jsx
        arr.unshift(0); // adds 0 at start
        ```
        
    - **`shift()`** → Removes element from the **start**.
        
        ```jsx
        arr.shift(); // removes first element
        ```
        
- **Iteration Methods**
    - **`forEach()`** → Loops through array, performs action, **no return**.
        
        ```jsx
        arr.forEach(el => console.log(el));
        ```
        
    - **`reduce()`** → Reduces array to **single value** (sum, product, etc.).
        
        ```jsx
        let sum = arr.reduce((acc, el) => acc + el, 0);
        ```
        
    - **`filter()`** → returns elements matching condition
        
        ```jsx
        let evens = nums.filter(n => n % 2 === 0); // [2, 4]
        ```
        
    - **`map()`** → returns a new array
        
        ```jsx
        let nums = [1, 2, 3, 4];
        
        // map → returns a new array
        let squared = nums.map(n => n * n); // [1, 4, 9, 16]
        ```
        
    - **`find()`**→ Returns **first element** that matches condition.
        
        ```jsx
        let result = arr.find(el => el > 5);
        ```
        
    - **`findIndex()**` → Returns **index** of first match.
        
        ```jsx
        let index = arr.findIndex(el => el > 5);
        ```
        
    - **`some()`** → Returns `true` if **any** element matches condition.
        
        ```jsx
        arr.some(el => el < 0);
        ```
        
    - **`every()**` → Returns `true` if **all** elements match condition.
        
        ```jsx
        arr.every(el => el > 0);
        ```
        
- **Manipulation / Utility**
    - **`includes()`**→ Checks if array contains value.
        
        ```jsx
        arr.includes(3); // true/false
        ```
        
    - **`indexOf()`**→ Returns index of element (first occurrence).
        
        ```jsx
        arr.indexOf(3);
        ```
        
    - **`slice()`**→ Extracts a **portion** of array (doesn’t change original).
        
        ```jsx
        arr.slice(1,3);
        ```
        
    - **`splice()`**→ Adds/removes elements (changes original array).
        
        ```jsx
        arr.splice(2,1,"new"); // remove 1 at index 2, add "new"
        ```
        
    - **`concat()`**→ Joins two arrays.
        
        ```jsx
        arr.concat([5,6]);
        ```
        
    - **`join()`** → Converts array to string with separator.
        
        ```jsx
        arr.join("-");
        ```
        
    - ** `reverse()` → Reverses array in place.**
        
        ```jsx
        arr.reverse();
        ```
        
    - **`sort()`→** Sorts array (alphabetically by default).
        
        ```jsx
        arr.sort((a,b)=>a-b); // numeric sort
        ```
        
    - **`flat()`** → Flattens nested arrays.
        
        ```jsx
        [[1,2],[3,4]].flat(); // [1,2,3,4]
        ```
        

## 10. Objects , Properties & Methods:

- In JavaScript, **objects** are used to store data in **key–value pairs**.
- Keys are called **properties**, and values can be anything: numbers, strings, arrays, functions, or even other objects.

```jsx
const person = {
  name: "Rimu",    // property (key: value)
  age: 19,
  isStudent: true
};
```

- **Properties:**
    - Properties are like **variables inside objects**.
    - You can **access** or **update** them using:
        - **Dot notation**: `object.key`
        - **Bracket notation**: `object["key"]`
    
    ```jsx
    console.log(person.name);     // Rimu
    console.log(person["age"]);   // 19
    
    person.age = 20;              // updating property
    person.city = "Sharjah";      // adding new property
    
    console.log(person);
    ```
    
- **Methods:**
    - **`Object.create()`** → Creates a new object using an existing object as prototype.
        
        ```jsx
        const person = {
          greet() {
            console.log("Hello, " + this.name);
          }
        };
        
        const student = Object.create(person);
        student.name = "Rima";
        student.greet(); // Hello, Rima
        ```
        
    - **`Object.assign()`**→ Copies properties from one or more source objects into a target object.
        
        ```jsx
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };
        
        const result = Object.assign({}, obj1, obj2);
        console.log(result); // { a: 1, b: 3, c: 4 }
        ```
        
    - **`Object.freeze()`** → Prevents adding, removing, or changing properties.
        
        ```jsx
        const user = { name: "Rima" };
        Object.freeze(user);
        
        user.name = "New"; // ❌ won’t change
        console.log(user.name); // Rima
        ```
        
    - **`Object.seal()`** → Prevents adding/removing properties, but allows changing existing values.
        
        ```jsx
        const user = { name: "Rima" };
        Object.seal(user);
        
        user.name = "Updated"; // ✅ works
        user.age = 20;         // ❌ not allowed
        console.log(user); // { name: "Updated" }
        ```
        
    - **`Object.defineProperty()`** → Adds/modifies a property with specific descriptors (writable, enumerable, configurable).
        
        ```jsx
        const obj = {};
        Object.defineProperty(obj, "name", {
          value: "Rima",
          writable: false,
          enumerable: true
        });
        
        console.log(obj.name); // Rima
        obj.name = "New";      // ❌ won’t update
        ```
        
    - **`Object.keys(), Object.values(), Object.entries()` :**
        - `Object.keys()` → Array of keys
        - `Object.values()` → Array of values
        - `Object.entries()` → Array of [key, value] pairs
            
            ```jsx
            const obj = { a: 1, b: 2, c: 3 };
            
            console.log(Object.keys(obj));   // ["a","b","c"]
            console.log(Object.values(obj)); // [1,2,3]
            console.log(Object.entries(obj));// [["a",1],["b",2],["c",3]]
            ```
            
    - **`Object.fromEntries()`** → Converts `[key,value]` pairs into an object.
        
        ```jsx
        const arr = [["a", 1], ["b", 2]];
        const obj = Object.fromEntries(arr);
        console.log(obj); // { a: 1, b: 2 }
        ```
        
    - **`Object.getOwnPropertyDescriptor()`** → Returns metadata about a property.
        
        ```jsx
        const obj = { x: 10 };
        const desc = Object.getOwnPropertyDescriptor(obj, "x");
        console.log(desc);
        // { value: 10, writable: true, enumerable: true, configurable: true }
        ```
        
    - **`Object.getPrototypeOf() / Object.setPrototypeOf()`** → Get or set an object’s prototype.
        
        ```jsx
        const proto = { greet: () => console.log("Hello") };
        const obj = {};
        Object.setPrototypeOf(obj, proto);
        
        obj.greet(); // Hello
        console.log(Object.getPrototypeOf(obj) === proto); // true
        ```
        
    - **`Proxy`** → Used to intercept and customize operations on objects (getter, setter, etc.).
        
        ```jsx
        const user = { name: "Rima", age: 19 };
        
        const proxy = new Proxy(user, {
          get(target, prop) {
            return prop in target ? target[prop] : "Not found";
          },
          set(target, prop, value) {
            if (prop === "age" && value < 0) {
              throw new Error("Age cannot be negative!");
            }
            target[prop] = value;
            return true;
          }
        });
        
        console.log(proxy.name);   // Rima
        console.log(proxy.email);  // Not found
        proxy.age = 20;            // ✅ works
        // proxy.age = -5;         // ❌ Error
        ```
        
    - **`Object.hasOwn()** (ES2022)` → Checks if property exists directly on object (not prototype).
        
        ```jsx
        const obj = { a: 1 };
        console.log(Object.hasOwn(obj, "a"));   // true
        console.log(Object.hasOwn(obj, "toString")); // false
        ```
        
    - `Object.is()` → Like `===`, but handles `NaN` and `-0` correctly.
        
        ```jsx
        console.log(Object.is(NaN, NaN)); // true
        console.log(Object.is(0, -0));    // false
        ```
        

## 11. Class & Inheritance:

- **What is a Class?**
    - A class is a blueprint for creating objects.
    - It defines properties (variables) and methods (functions) that the object will have.
    
    ```jsx
    class Person {
        constructor(name, age) {
            this.name = name;   // property
            this.age = age;
        }
    
        greet() {              // method
            console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
        }
    }
    
    const p1 = new Person("Rima", 20);
    p1.greet();  // Hi, my name is Rima and I'm 20 years old.
    ```
    
- **The `constructor()`**
    - Special method in a class that runs automatically when an object is created using `new`.
    - Used to initialize object properties.
- **Inheritance with `extends`**
    - Allows one class to inherit (reuse) properties and methods of another class.
    
    ```jsx
    class Animal {
        constructor(name) {
            this.name = name;
        }
    
        speak() {
            console.log(`${this.name} makes a sound`);
        }
    }
    
    // Dog class inherits from Animal
    class Dog extends Animal {
        bark() {
            console.log(`${this.name} barks 🐶`);
        }
    }
    
    const d1 = new Dog("Tommy");
    d1.speak();  // Tommy makes a sound
    d1.bark();   // Tommy barks 🐶
    
    ```
    
- **The `super` keyword**
    - Used inside a child class to **call parent class’s constructor** or methods.
    
    ```jsx
    class Vehicle {
        constructor(brand) {
            this.brand = brand;
        }
    
        start() {
            console.log(`${this.brand} vehicle started`);
        }
    }
    
    class Car extends Vehicle {
        constructor(brand, model) {
            super(brand);  // calls parent constructor
            this.model = model;
        }
    
        showDetails() {
            super.start();  // calling parent method
            console.log(`Car: ${this.brand} ${this.model}`);
        }
    }
    
    const car1 = new Car("Toyota", "Camry");
    car1.showDetails();
    // Toyota vehicle started
    // Car: Toyota Camry
    ```
    

## 12. Scope:

- **What is Scope?**
    - **Scope** decides **where a variable can be accessed** in your program.
    
    JavaScript has 3 main types of scope:
    
    1. **Global Scope**
    2. **Local (Function) Scope**
    3. **Block Scope**
- **Global Scope**
    - A variable declared **outside any function or block** → available **everywhere** in the program.
    
    ```jsx
    let globalVar = "I am global";
    function show() {
    console.log(globalVar); // ✅ Accessible inside function
    }
    show();
    console.log(globalVar); // ✅ Accessible outside too
    ```
    
- **Local (Function) Scope**
    - Variables declared **inside a function** are only available **within that function**.
    
    ```jsx
    function test() {
        let localVar = "I am local";
        console.log(localVar); // ✅ Works inside
    }
    
    test();
    // console.log(localVar); ❌ Error: not defined
    ```
    
- **Block Scope**
    - Variables declared with **`let`** or **`const`** inside `{}` (block) are only accessible **inside that block**.
    
    ```jsx
    {
        let blockVar = "I am block scoped";
        const pi = 3.14;
        console.log(blockVar); // ✅ Works here
    }
    // console.log(blockVar); ❌ Error
    ```
    
    - But with **`var`**, block scope does not apply (only function scope).
        
        ```jsx
        {
            var x = 100;
        }
        console.log(x); // ✅ Works (because var is function-scoped, not block-scoped)
        ```
        

## 13. Protoype:

JavaScript is **prototype-based** (not class-based originally). That means objects can directly inherit properties and methods from other objects using the **prototype chain**.

- **What is Prototype?**
    - In JavaScript, every object has a hidden property called **`[[Prototype]]`** (also accessible via `__proto__`).
    - It is basically a link to another object, called its **prototype**.
    - Objects can "inherit" properties and methods from their prototype.
    
    ```jsx
    let person = {
    greet: function() {
    console.log("Hello!");
    }
    };
    let student = {
    name: "Rimu"
    };
    
    // link student’s prototype to person
    student.__proto__ = person;
    
    student.greet();  // Hello! (inherited from person)
    ```
    
    👉 Here, `student` doesn’t have `greet()`, but since its prototype is `person`, it finds it there.
    
- **Prototype Chain**
    - If a property/method isn’t found on the object, JavaScript looks up its prototype.
    - If not found there, it continues up the chain until it reaches `Object.prototype`.
    - At the top of the chain is always **`null`**.
    
    ```jsx
    console.log(student.toString()); 
    // found in Object.prototype
    ```
    
- **Functions and Prototypes**
    - Functions in JavaScript are special: every function automatically has a **`prototype`** property.
    - This is used when we create objects using **constructors**.
    
    ```jsx
    function Person(name) {
        this.name = name;
    }
    
    // add method to prototype
    Person.prototype.sayHi = function() {
        console.log("Hi, I'm " + this.name);
    };
    
    let p1 = new Person("Rimu");
    let p2 = new Person("Inshad");
    
    p1.sayHi(); // Hi, I'm Rimu
    p2.sayHi(); // Hi, I'm Inshad
    ```
    
    - Instead of giving every object its own copy of `sayHi`, it’s shared via the prototype. (saves memory!)
- **Inheritance with Prototypes**
    - You can extend one constructor function with another.
    
    ```jsx
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function() {
        console.log(this.name + " makes a sound");
    };
    
    function Dog(name) {
        Animal.call(this, name); // call parent constructor
    }
    Dog.prototype = Object.create(Animal.prototype); // inherit
    Dog.prototype.constructor = Dog;
    
    Dog.prototype.speak = function() {
        console.log(this.name + " barks");
    };
    
    let d = new Dog("Tommy");
    d.speak();  // Tommy barks
    ```
    
- **Prototype vs Class**
    - ES6 `class` is just **syntactic sugar** for prototypes.
    - Under the hood, classes still use the prototype model.
    
    ```jsx
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(this.name + " makes a sound");
        }
    }
    
    class Dog extends Animal {
        speak() {
            console.log(this.name + " barks");
        }
    }
    
    let d = new Dog("Tommy");
    d.speak(); // Tommy barks
    ```
    

## 14. Callbacks:

- A **callback** is just a **function passed as an argument** to another function, to be executed later.

```jsx
function fetchData(callback) {
console.log("Fetching data...");
setTimeout(() => {
    const data = "User data received!";
    callback(data); // execute the callback
}, 2000);
}

fetchData(function(result) {
console.log("Callback says:", result);
});
```

- **Problem with Callbacks** → When you have multiple async tasks (like reading files, fetching APIs), callbacks get **nested inside each other** → this is called **Callback Hell**.

## 15. Promises:

A **Promise** is an object that represents the result of an async operation — it can be:

- **Pending** → still working
- **Fulfilled** → success (resolve)
- **Rejected** → failed (reject)

```jsx
let fetchData = new Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
        if (success) {
            resolve("Promise resolved: Data received!");
        } else {
            reject("Promise rejected: Error fetching data.");
        }
    }, 2000);
});

// Using .then() and .catch()
fetchData
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

- Promises **solve callback hell** by making the flow cleaner.

## 16. Async / Await:

- `async` makes a function return a Promise.
- `await` pauses the execution until the Promise is settled (resolved/rejected).

```jsx
function getData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Async/Await: Data received!");
        }, 2000);
    });
}

async function showData() {
    console.log("Fetching...");
    let result = await getData(); // wait for promise
    console.log(result);
}

showData();
```

✅ **Benefits of Async/Await**

- Code looks **synchronous** but works asynchronously.
- Easier to read and debug than chaining `.then()` calls.

## 16. Currying:

- **Currying** is a technique in functional programming where a function that takes **multiple arguments** is transformed into a sequence of functions, each taking **a single argument**.

```jsx
function add(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}
console.log(add(1)(2)(3)); // 6
```

### ✅ Why use Currying?

1. **Reusability** – Create specialized functions by fixing some arguments.
2. **Code readability** – Makes functions more modular and composable.
3. **Functional programming** – Fits well with higher-order functions (like `map`, `filter`).