 // O(n^2) complexity
// note: rather than swapping, we could also filter out the old value 
// and use a new array to populate, but this one is easier in JS

function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}

const arr = [5,1,4,2,8];

const arr2 = [5, 3, 8, 2, 4,1];

const arr3 = [20, 20, 31, 56, 1, 12, 12];

const arr4 = [3, -9, -12, -1, 8];

console.log(selectionSort(arr4));