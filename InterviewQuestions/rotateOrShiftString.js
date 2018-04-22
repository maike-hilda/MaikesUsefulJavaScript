// shift letters in the alphabet by indicated number
function rotateString(word, num) {
    // convert the word into an array, since we would have to use
    // String.replace method otherwise which always replaces the first find of
    // a letter/word which we can't do
    // Note: could also make a new lower case word and then have algorithm keep casing
    word = word.toLowerCase().split("");
    // so we can also accept negatives for num
    num = ((num % 26) + 26) % 26;
    // create abc array
    // .split() is not really necessary
    let abc = "abcdefghijklmnopqrstuvwxyz".split("");
        
    for (let i = 0; i < word.length; i++) {
        // to skip spaces or letters
        if (abc.includes(word[i])) {
            let index = abc.indexOf(word[i]);
            index = (index + num)%26;
            word[i] = abc[index];
        }
    }
    return word.join("");
}

console.log(rotateString("zoo keeper", -24));

function rotateSTring2(word, num) {
    word = word.toLowerCase().split("");
    num = ((num % 26) + 26) % 26;
    let abc = "abcdefghijklmnopqrstuvwxyz".split("");
    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            continue;
        }
        let index = abc.indexOf(word[i]);
        index = (index + num)%26;
        word[i] = abc[index];
    }
    return word.join("");
}

console.log(rotateString2("zoo keeper", -24));


// Note: [..."string"] -> ["s", "t", "r", "i", "n", "g"]
// vs "string".split("") does the same