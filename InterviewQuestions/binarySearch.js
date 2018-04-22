// binary search algorithm
// assume given arry is sorted
const arrToSearch = [1, 4, 7, 9, 10, 12, 32, 35, 46, 67, 88];
const numToSearch = 32;

// find the mean of the min and max
function findMiddle(min, max) {
    let middle = (max + min) / 2;
    middle = Math.floor(middle);
    return middle;
}

function binarySearch(num, arr) {
    let minIndex = 0;
    let maxIndex = arr.length -1;

    // note that if we never searched for values that are not in the array
    // we could just make it a while(true) loop
    while (minIndex <= maxIndex) {
        // find the middle
        let currentIndex = findMiddle(minIndex, maxIndex);
        let currentElement = arr[currentIndex];
        // now check for the element
        // first if it's more
        if (num > currentElement) {
            minIndex = currentIndex + 1;
        } else if (num < currentElement) {
            maxIndex = currentIndex -1;
        } else {
            return currentIndex;
        }    
   }
    return false;
}

console.log(binarySearch(numToSearch, arrToSearch));

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

// recursive that actually return the index
function binarySearchRecursiveMinMax(num, arr, min, max) {
    let minIndex = min || 0;
    let maxIndex = max || arr.length - 1;
    // base case
    if (minIndex > maxIndex) {
        return false;
    }
    let mid = Math.floor(minIndex + (maxIndex - minIndex) / 2);
    if (arr[mid] === num) {
        return mid;
    } else if (arr[mid] > num) {
        maxIndex = mid - 1;
        return binarySearchRecursiveMinMax(num, arr, minIndex, maxIndex);
    } else if (arr[mid] < num) {
        minIndex = mid + 1;
        return binarySearchRecursiveMinMax(num, arr, minIndex, maxIndex);
    }
}

console.log(binarySearchRecursiveMinMax(4, [1, 4, 7, 9, 10, 12, 32, 35, 46, 67, 88]));

