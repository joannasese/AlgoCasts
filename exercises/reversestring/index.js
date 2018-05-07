// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// MY SOLUTION #1
function reverse(str) {
  return str.split('').reverse().join('');
}

// MY SOLUTION #2
function reverse(str) {
  let strAsArr = str.split('')
  let reversed = [];
  for (let i = strAsArr.length-1; i >= 0; i--){
    reversed.push(strAsArr[i])
  }
  return reversed.join('')
}

// THEIR SOLUTION #1
function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

// THEIR SOLUTION #2
function reverse(str) {
  let reversed = '';

  for (let character of str){
    reversed = character + reversed;
  }
  return reversed;
}

// THEIR SOLUTION #3
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}

module.exports = reverse;
