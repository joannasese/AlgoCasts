// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// my solution
function chunk(array, size) {
  let newArr = [];
  while (array.length > 0)
    newArr.push(array.splice(0, size));
  return newArr;
}

// another solution
function chunk(array, size) {
  let newArr = [];
  for (i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i+size))
  }
  return newArr;
}

// solution 1
function chunk(array, size) {
  
}

module.exports = chunk;
