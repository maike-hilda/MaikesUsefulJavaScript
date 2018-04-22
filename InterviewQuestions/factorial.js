function factorial(n) {
    if (n < 0) {
        return false;
    } else if (n == 1 || n == 0) {
        // the base case
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(4));