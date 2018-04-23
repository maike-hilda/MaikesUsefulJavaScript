// Singly or Doubly Invoked Function
// getTotal(10, 20) or getTotal(10)(20)
function getTotal() {
    if (arguments.length ===2) {
        return arguments[0] + arguments[1];
    }
    const arg1 = arguments[0];
    return function(arg2) {
        return arg1 + arg2;
    } 
}

console.log(getTotal(10, 20));
console.log(getTotal(10)(20));

// arguments is an array like object, so we can also do
// var args = Array.prototype.slice.call(arguments);
// to make sure we have all the array methods available
