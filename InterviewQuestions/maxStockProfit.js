// takes in array of prices as parameter
// returns the max possible profit of the day
// this is O(n), this can also be done O(n^2) i.e. with nested loops
function maxStockProfit(arr) {
    // indices
    let min = 0;
    let max = 1;
    // max profit
    let diff = -1;
    // for times where we update the min
    let needUpdateMin = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (needUpdateMin) {
            min = i;
        }
        max = i + 1;

        if (arr[min] > arr[max]) {
            needUpdateMin = true;
        } else {
            const tempDiff = arr[max] - arr[min];
            if (tempDiff > diff) {
                diff = tempDiff;
            }
            needUpdateMin = false;
        }
    }
    return diff;
}

console.log(maxStockProfit([32, 46, 26, 22, 38, 40, 48, 42]));
console.log(maxStockProfit([44, 30, 24, 32, 35, 30, 40, 38, 15]));