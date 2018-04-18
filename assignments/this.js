/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding is a global binding meaning it will point to EVERYTHING!
* 2. when dot notation is used to invoke a function
* 3. creates a new object
* 4. occurs when .call(), .apply(), and .bind() are used on a function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function window() {
    return this;
}
// console.log(window());

// Principle 2
// code example for Implicit Binding

let theObject = {
    age: 102,
    myAge: function(name) {
        return `Hi, I'm ${name} and I am ${this.age}`;
    }    
}
console.log(theObject.myAge('Sam'));

// Principle 3
// code example for New Binding

function Dog(age, breed) {
    this.age = age;
    this.breed = breed;
};

let newDog = new Dog(3, "German Shepard");
console.log(newDog);

// Principle 4
// code example for Explicit Binding

let car = {
    make: "Ford",
    model: "F-150",
    makeModel: function() {
        return `${this.make} ${this.model}`;
    }
}

let newCar = {
    make: "Lexus",
    model: "ls",
}

console.log(car.makeModel.call(newCar));