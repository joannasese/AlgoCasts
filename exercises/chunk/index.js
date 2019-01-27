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
  let chunked = [];
  for (let el of array) {
    let last = chunked[chunked.length-1];
    if (!last || last.length === size){
      chunked.push([el])
    } else {
      last.push(el)
    }
  }
  return chunked;
}

// solution 2
function chunk(array, size) {
  let chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index+size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;
