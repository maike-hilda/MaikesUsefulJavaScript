// this algorithms works by swapping adjacent elements if they are in the wrong order

// const arr = [5,1,4,2,8];

// function bubbleSort(arr) {
//     let length = arr.length - 1;
//     for (let j = 0; j < arr.length-1; j++) {

//         for (let i = 0; i < length; i++) {
//             console.log(arr[i], arr[i+1]);

//             if (arr[i] > arr[i+1]) {
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//             }
//         }
//         length--;
//     }
//     return arr;

// }

const arr2 = [5, 3, 8, 2, 4,1];

const arr3 = [20, 20, 31, 56, 1, 12, 12];

const arr4 = [3, -9, -12, -1, 8];

// console.log(bubbleSort(arr2));


// how many passes? array.length - 1 passes
// complexity: 0(n^2)
function bubbleSort2(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            }            
        }
    }
    return arr;
}

console.log(bubbleSort2(arr4));

// bucket sort: create an array of 
// the size of the highest number and then drop them off in their place