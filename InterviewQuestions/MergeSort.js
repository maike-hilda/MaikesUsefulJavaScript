// combine two sorted arrays to get one sorted array
// break down one unsorted array into arrays of one
// merge sort those until one fully sorted array is left
// this is a divide and conquer algorithm
// i.e. we divide the problem up into subproblems, solve those, then combine solutions
function mergeSort(arr) {
    // for recursion
    if (arr.length < 2) {
        return arr;
    } 
    // find the split point
    const middle = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, middle);
    const arr2 = arr.slice(middle);
    // call 
    return merge(mergeSort(arr1), mergeSort(arr2));
} 

function merge(arr1, arr2) {
    result = [];
    while(arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            result.push(arr1.shift());
        } else {
            result.push(arr2.shift());
        }
    }
    if (arr1.length) {
        result = result.concat(arr1);
    } else {
        result = result.concat(arr2);
    }
    return result;
}

console.log(mergeSort([14, 7, 3, 12, 9, 11, 6, 2]));