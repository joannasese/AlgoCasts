// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// my solution
function reverseInt(n) {
  if (n < 0){
    return -parseInt((Math.sign(n)*n).toString().split('').reverse().join(''))
  } else if (n === 0){
    return 0
  } else {
    return parseInt(n.toString().split('').reverse().join(''));
  }
}

module.exports = reverseInt;
