function isPrime(n) {
    if (n%2 === 0) {
        return false;
    }
    // Math.floor is not necessary
    for (i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(30967));