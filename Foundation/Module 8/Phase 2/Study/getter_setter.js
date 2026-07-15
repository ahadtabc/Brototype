class Name{
    #name;
    constructor(name){
        this.#name=name;
    }

    get name(){
        return this.#name;
    }

    set name(updateName){
        if(updateName===""){
            console.log("Name is Empty Now ! Please put a name")
        }
        this.#name=updateName;
    }

}
const myname= new Name("Abdul Ahad");

console.log(myname.name);

myname.name=""
console.log(myname.name)