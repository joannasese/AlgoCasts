// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// my version
function reverse(str) {
    return str.split('').reverse().join('');
}


// solution 1
// same as mine

// another solution
function reverse(str) {
  let reversed = '';
  for (let i = str.length-1; i >= 0; i--){
    reversed += str[i];
  }
  return reversed;
}

// solution 2
function reverse(str) {
  // str = back
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
    // first pass: reversed = 'b'
    // second pass: reversed = 'ab'
    // third pass: reversed = 'cab'
    // fourth pass: reversed = 'kcab'
  }
  return reversed;
}

// solution 3
function reverse(str) {
  let arr = str.split('');
  return arr.reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;
