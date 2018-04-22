// input array of coin types and total sum 
function coinChange(coins, change) {
    let results = [];
    let hashmap = [];
    for (let i = 0; i < coins.length; i++) {
        let testCoin = coins[i];
        let remainingSum = change - testCoin;
        if (remainingSum < Math.min(coins)) {
            continue;
        }
        for (let j = 0; j < coins.length; j++) {
            
        }
    }
}