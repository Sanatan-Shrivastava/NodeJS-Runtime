// Module Wrapper function()

// (function (exports, require, module, __filename, __dirname){

// })


//
console.log(__dirname, __filename);





class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}



module.exports = Person;