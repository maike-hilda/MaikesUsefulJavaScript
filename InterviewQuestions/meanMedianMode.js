function mean(arr) {
    const total = arr.reduce((a, b) => a + b);
    // if not allowed Array.reduce()
    // let total = 0; 
    // arr.forEach(element => total += element);
    return total / arr.length;
}

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[0];
    let lesser = [];
    let greater = [];
    for (let i = 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            lesser.push(arr[i]);
        } else {
            greater.push(arr[i]);
        }
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

function median(arr) {
    arr = quickSort(arr);
    // or use arr.sort((a,b) => a-b)
    len = arr.length;
    if (len % 2 === 0) {
        return mean([arr[len / 2 - 1], arr[(len / 2)]]);
    } else {
        return arr[(len - 1) / 2]; // or Math.floor(len / 2);
    }
}

function mode(arr) {
    // you might think using an array would work here too, 
    // but think of negative values
    let counter = {
        currentModeCount: 0,
        currentMode: [],
    }
    arr.forEach(num => {
        if (!counter[num]) {
            counter[num] = 0;
        } 
        counter[num]++;
        
        // keep track of num with most occurences
        if (counter[num] > counter.currentModeCount) {
            // console.log(counter.currentMode);
            counter.currentModeCount = counter[num];
            counter.currentMode = [num];
        } else if (counter[num] === counter.currentModeCount) {
            counter.currentMode.push(num);
        }
    });
    // could also have done:
    // let maxFreq = 0, modes = [];
    // for (let num in counter) {
        //  if (counter[num] > maxFreq) {
            // modes = [num];
            // maxFreq = counter[num];
            // } else if (counter[num] === maxFreq) {
                // modes.push(num);
            //}
        //}
    // }
    
    // check if each number appears at the same freq i.e. there is no mode
    if (counter.currentMode.length === Object.keys(counter).length - 2) {
        counter.currentMode = [];
    }

    return counter.currentMode;
}

function meanMedianMode(arr) {
    return {
        mean: mean(arr),
        median: median(arr),
        mode: mode(arr)
    };
}
const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const unsortedArr = [7, 8, 8, 10, 1, 1, 2, 3, 2, 6, 4, 9, 11, 23, 23, 23, 2, 4, 4, 5, 5];

console.log(meanMedianMode(testArr));