// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution
function maxChar(str) {
  return str.split('').sort((a,b) =>
    str.split('')
    .filter(x => x===a).length - str.split('').filter(x => x===b).length
  ).pop()
}

module.exports = maxChar;
