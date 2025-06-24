function isPalindrome(word) {
    let lowerCaseWord = word.toLowerCase();
    if (lowerCaseWord.charAt(0) == lowerCaseWord.charAt(lowerCaseWord.length-1) && lowerCaseWord.charAt(1) == lowerCaseWord.charAt(lowerCaseWord.length-2)) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome("noon"));