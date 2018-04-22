// input: a string of words
// output: a string with all words reversed, but still in the original order
// do not use Array.reverse()
function reverseWords(str) {
    // create an array of the words in the string
    str = str.split(" "); 
    let reverseString = [];
    str.forEach(word => {
        // word = [...word];
        let reverseWord = "";
        for (let i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        } 
        reverseString.push(reverseWord);
    });
    return reverseString.join(" ");
}

console.log(reverseWords("Murphus  Dobius says hi"));
 
