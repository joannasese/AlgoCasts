// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// MY SOLUTION #1
function anagrams(stringA, stringB) {
  const A = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  const B = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  return A === B ;
}

// MY SOLUTION #2
function anagrams(stringA, stringB) {
  let sorted = (str) => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');

  return sorted(stringA) === sorted(stringB);
}

module.exports = anagrams;
