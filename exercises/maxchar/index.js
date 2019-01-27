// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// my solution
function maxChar(str) {
  return str.split('').sort((a,b) =>
    str.split('').filter(x => x===a).length - str.split('').filter(x => x===b).length
  ).pop()
}

// another solution
function maxChar(str) {
  let chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  // return list of keys
  // sort list in ascending order by value
  // pop off and return last key
  return Object.keys(chars).sort((a,b)=>chars[a]-chars[b]).pop();
}

// solution 1
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    // if/else logic is the same as 'chars[char] = chars[char] + 1 || 1;'
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  for (let char in charMap) {
    if (charMap[char] > max){
      max = charMap[char]
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
