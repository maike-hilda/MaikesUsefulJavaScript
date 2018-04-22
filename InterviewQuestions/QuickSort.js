function quicksortBasic(array) {
    if(array.length < 2) {
        return array;
    }

    var pivot = array[0];
    var lesser = [];
    var greater = [];

    for(var i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            lesser.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}
  
const arr = [5, 1, 4, 2, 8];

const arr2 = [5, 3, 8, 2, 4,1];

const arr3 = [20, 20, 31, 56, 1, 12, 12];

const arr4 = [3, -9, -12, -1, 8];

console.log(quicksortBasic(arr));