// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// MY SOLUTION #1
function palindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// MY SOLUTION #2
function palindrome(str) {
  let reversed = str.split('').reduce((rev, char) => char + rev, '');
  return str === reversed;
}

module.exports = palindrome;
