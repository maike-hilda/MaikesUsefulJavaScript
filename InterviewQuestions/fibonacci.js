function fibonacci(n) {
    // n means we want the nth fibonacci number
    let arr = [1, 1];
    if (n === 1 || n === 2) {
        return 1;
    }
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n-1];
}

console.log(fibonacci(12));

function fibonacci2(n) {
    let arr = [1, 1];
    for (let i = 2; i < n; i++) {
        [arr[0], arr[1]] = [arr[1], arr[0] + arr[1]];
    }
    return arr[1];
}

console.log(fibonacci2(12));

// recursive but super bad time complexity (O(2^n))
function fibonacciRecursive(n) {
    // base case
    if (n < 3) {
        return 1;
    } 
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacciRecursive(12));

// no array/while loop

function fibonacciWhile(n) {
    let a = 1, b = 0;
    while (n >= 2) {
        [a, b] = [a+b, a];
        n--
    }
    return a;
}

console.log(fibonacciWhile(12));

// memoization
// store values so you don't have to get them back 
// i.e. avoid recursion when it's unnecesary
// O(n)
function fibonacciMemo(num, memo) {
    memo = memo || {1: 1, 2: 1}; // could also do if (index < 3) return 1 and have {}

    if (memo[num]) {
        return memo[num];
    }
    return memo[num] = fibonacciMemo(num - 1, memo) + fibonacciMemo(num - 2, memo);
}

console.log(fibonacciMemo(2));