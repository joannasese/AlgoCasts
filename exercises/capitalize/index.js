// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// MY SOLUTION
function capitalize(str) {
  const capitalized = [];
  for (let word of str.split(' ')){
    word = word.slice(0,1).toUpperCase() + word.slice(1)
    capitalized.push(word)
  }
  return capitalized.join(' ');
}

module.exports = capitalize;
