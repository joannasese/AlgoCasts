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
    return -parseInt(n.toString().split('').reverse().join(''));
  } else {
    return parseInt(n.toString().split('').reverse().join(''));
  }
}

// solution 1
function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');
  return n < 0 ? -parseInt(reversed) : parseInt(reversed);
}
module.exports = reverseInt;
