// write a function with a triple invocation tripleAdd(10)(20)(30)
// returns the sum of these numbers
function tripleAdd(x) {
    function doubleAdd(y) {
        function Add(z) {
            return x + y + z;
        }
        return Add;
    }
    return doubleAdd;
}

console.log(tripleAdd(1)(2)(3));

const closureOne = tripleAdd(1);

console.log(closureOne(2)(3));

const closureTwo = closureOne(2);

console.log(closureTwo(3));

// we envoke triple Add one
// what is returned is another function which we invoke 
// that returns another function which we envoke i.e. we invoke 3 times
console.log(tripleAdd(10)(20)(30));

// this is a curried function 
// closure: accessing a variable outside of a function's scope
// currying: can use e.g. to avoid always having to pass tripleAdd(10)
// go from one function that takes multiple arguments to a sequence of functions
// that each take a single (or multiple) argument(s)