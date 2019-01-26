// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my solution
function palindrome(str) {
  return str === str.split('').reverse().join('');
}

// another solution
function palindrome(str) {
  let reversed = str.split('').reduce((reversed, char) => char + reversed, '')
  return str === reversed;
}

module.exports = palindrome;
