// returns every element from an array that adds up to a given sum
// return as array to arrays
// can reuse numbers
function twoSum(arr, num) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        let test = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (test + arr[j] === num) {
                results.push([test, arr[j]]);
            }
        }
    }
    return results;
}

console.log(twoSum([1, 6, 3, 5, 4, 3], 7));

function twoSum2(arr, num) {
    let results = [];
    let hashtable = [];
    for (let i = 0; i < arr.length; i++) {
        let test = arr[i];
        let counterpart = num - test;
        if (hashtable.indexOf(counterpart) !== -1) {
            results.push([test, counterpart]);
        } else {
            // note: putting this in the else statement means we won't have repeated pairs
            // like [3, 4] and [4, 3] 
            hashtable.push(test);
        }
    }
    return results;
}

console.log(twoSum2([1, 6, 3, 5, 4, 3], 7));
console.log(twoSum2([40, 11, 19, 17, -12], 28));