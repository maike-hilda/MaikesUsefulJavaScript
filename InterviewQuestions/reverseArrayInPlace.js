// reverse an array without creating a new array
// do not use Array.reverse
function reverseArray(arr) {
    const len = arr.length;
    // find half the length of the array
    // if the array has an odd number of elements
    // the middle won't need to be switched, so we find the floor of the  middle
    // Note: this isn't actually necessary, since the iteration of the for loop
    // would end at the highest integer value regardless
    const halfLen = Math.floor(len / 2);
    for (let i = 0; i < halfLen; i++) {
        // using a new array Method, else use a temp variable to switch
        [arr[i], arr[len - 1 - i]] = [arr[len - 1 -i], arr[i]];
    }
    return arr;
}

console.log(reverseArray([..."abcdefghijklmnopqrstuvwxyz"])); 
// returns ["z", "y", ..., "b", "a"]