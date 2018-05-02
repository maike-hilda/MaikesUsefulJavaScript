function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[0];
    const lesser = [];
    const greater = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot < arr[i]) {
            greater.push(arr[i]);
        } else {
            lesser.push(arr[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

const arr = [5, 1, 4, 2, 8];

const arr2 = [5, 3, 8, 2, 4,1];

const arr3 = [20, 20, 31, 56, 1, 12, 12];

const arr4 = [3, -9, -12, -1, 8];

console.log(quickSort(arr));