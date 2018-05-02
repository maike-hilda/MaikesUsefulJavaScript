// binary search algorithm
// assume given arry is sorted
const arrToSearch = [1, 4, 7, 9, 10, 12, 32, 35, 46, 67, 88];
const numToSearch = 32;

// find the mean of the min and max
function binarySearch(arr, num) {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);
    while (min <= max) {
        if (arr[mid] === num) {
            return mid;
        } else if (arr[mid] > num) {
            max = mid - 1;
        } else if (arr[mid] < num) {
            min = mid + 1;
        }
        mid = Math.floor((min + max) / 2);
    }    
    return false;
}

const arr = [1, 2, 4, 6, 8, 20, 34, 56, 78, 90];
const num = 5;

console.log(binarySearch(arr, num));

// using recursion but only returns true/false
function binarySearchRecursive(num, arr) {
    let middle = Math.floor(arr.length / 2);
    let middleElement = arr[middle];
    if (middleElement === num) {
        return true;
    } else if (middleElement < num && arr.length > 1) {
        return binarySearchRecursive(num, arr.splice(middle + 1, arr.length));
    } else if (middleElement > num && arr.length > 1) {
        return binarySearchRecursive(num, arr.splice(0, middle));
    } 
    return false;
}

console.log(binarySearchRecursive(numToSearch, arrToSearch));

function binarySearchRec(arr, num, min, max) {
    min = min || 0;
    max = max || arr.length - 1;

    if (min > max) {
        return false;
    }
    
    mid = Math.floor(min + (max - min) / 2);
    // base case
    if (arr[mid] === num) {
        return mid;
    } else if (arr[mid] > num) {
        max = mid - 1;
        return binarySearchRec(arr, num, min, max);
    } else if (arr[mid] < num) {
        min = mid + 1;
        return binarySearchRec(arr, num, min, max);
    }
    
}

console.log(binarySearchRec(arr, num));
