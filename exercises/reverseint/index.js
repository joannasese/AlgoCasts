// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// MY SOLUTION #1
function reverseInt(n) {
  if (n >= 0){
    const reversed =  n.toString().split('').reverse().join('');
    return parseInt(reversed);
  } else {
    const reversed = n.toString().split('').slice(1).reverse().join('');
    return -reversed;
  }

}

module.exports = reverseInt;
