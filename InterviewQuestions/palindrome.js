// String.slice(#1, #2) --> #1 is the first index to cut, #2 is the last one to cut
// but not including #2; -1 means from the back i.e. the last letter

// recursion version
function palindrome(word) {
    word = word.toLowerCase();
    let first = word.slice(0, 1);
    let last = word.slice(-1);
    let leftoverWord = word.slice(1, -1);
    if (word.length === 1) {
        return true;
    } else if (first === last) {
        return palindrome(leftoverWord);
    }
    return false;
}

console.log(palindrome2("motor"));

// or
function palindrome2(word) {
    let first = word.slice(0, 1);
    let last = word.slice(-1);
    let leftoverWord = word.slice(1, -1);
    if (word.length === 1) {
        return true;
    } else if (first !== last) {
        return false;
    } else {
        return palindrome(leftoverWord);
    }
}

function palindromeReverse(word) {

}

// version using string methods (from udemy course)
function isPalindrome(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    var lettersArr = [];
    charactersArr.forEach(char => {
      if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
    });
    
    return lettersArr.join('') === lettersArr.reverse().join('');
}
   
isPalindrome("Madam, I'm Adam");