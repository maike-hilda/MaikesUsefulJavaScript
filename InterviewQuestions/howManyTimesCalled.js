// Write a function that keeps track of how many times it was called
// All functionality must be inside the function
// this can be used in an application where you want a certain functinality
// to only run a certain number of times
function counter() {
    if (!this.count) {
        this.count = 0;
    }
    this.count++;
    return this.count;
}

console.log(counter());
console.log(counter());

// or using a closure

function counter2() {
    let count = 0;

    // the closure:
    return function() {
        count++;
        return count;
    };
}

// create two instances of counter2
const instanceOne = counter2();
const instanceTwo = counter2();