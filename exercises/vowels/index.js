// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// MY SOLUTION #1
function vowels(str) {
  let all = str.toLowerCase().match(/[aeiou]/g);
  return all === null ? 0 : all.length;
}

// ITERATIVE SOLUTION
function vowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let char of str.toLowerCase()){
    if (vowels.includes(char)){
      count++
    }
  }
  return count;
}

module.exports = vowels;
