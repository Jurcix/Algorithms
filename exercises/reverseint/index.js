// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('')
  return Math.sign(n) * parseInt(reversed)
}

// SOLUTION 1
// array = n.toString().split('')
// let simbol = '';
// // if last number is 0
// if(array[array.length] === 0) {
// need to loop through all last elements that equal 0
//   array.pop();
// }

// array.reverse()
// // If first element is not a number 
// if(isNaN(array[array.length]) && array[array.length] === "-") {
//   simbol = array.pop();
// } 
// return Number(simbol + array.join(''))

module.exports = reverseInt;
