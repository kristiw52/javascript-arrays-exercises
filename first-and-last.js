/*

First and Last

Write a JavaScript function called first() that takes one input, an array, and
returns the first element in that array.

Write another JavaScript function called last() that takes one input, an
array,and returns the lastt element in that array.

*/

// YOUR CODE GOES HERE
function first(colors) {
    return colors[0];
}
function last(value) {
    return value[value.length - 1];
}

var colors = ['red', 'green', 'blue'];
console.log(first(colors));
console.log(last(colors));