// test which numbers from 0 to n are prime
function sieveOfEratosthenes(n) {
    let primes = {};
    primes[1] = false;

    for (let i = 2; i <= n; i++) {
        primes[i] = true;
    }
    
    for (i in primes) {
        let j = 2;
        while (primes[i] && j <= Math.sqrt(i)) {
            console.log("primes[i]", primes[i], Math.sqrt(i));
            if (i % j === 0) {
                primes[i] = false;
                console.log("in if", i);
                break;
            }
            console.log("j", j);
            j++;
        }
    }
    return primes;
}

console.log(sieveOfEratosthenes(20));