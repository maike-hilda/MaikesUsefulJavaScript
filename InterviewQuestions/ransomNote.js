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

const text = "this is a secret note from you from a secret admirer";
const magazine = "puerto rico is a place of great wonder and excitement " +
    "it has many secret waterfall locatoins that i am an admirer of you must " +
    "hike quite a distance to find the secret places as they are far from " +
    "populated areas but it is worth the effort a tip i have for you is to go " +
    "early in the morning when it is not so hot out also note that you must wear " +
    "hiking boots this is one of the best places i have from ever visited";

console.log(ransomNote(text, magazine));
