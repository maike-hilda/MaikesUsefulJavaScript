// note made from words from a magazine text 
// algorithm should tell us if the magazin text has all the words
// linear time complexity (loops are not nested)
// o(n+m) since n text in note, and m text in magazine

function ransomNote(noteText, magazineText) {  
    // we assume all letters are lowercase and there is no
    // punctuation
    var noteArr = noteText.split(" ");
    var magazineArr = magazineText.split(" ");
    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) {
            magazineObj[word] = 0;
        }
        magazineObj[word]++
    });
    var noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word] && magazineObj[word] > 0) {
            magazineObj[word]--;
        } else {
            noteIsPossible = false;
        }
    })
    return noteIsPossible;
}

const text = "";
const magazine = "";

console.log(ransomNote(text, magazine));
