function isPrime(n) {
    // if even, don't need to run the loop
    if (n%2 === 0 && n !== 2) {
        return false;
    }
    // Math.floor is not necessary
    for (i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(30967));