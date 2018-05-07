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

//

module.exports = reverse;
