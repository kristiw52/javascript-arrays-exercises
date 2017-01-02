/*

Longest String

Given an array of strings, find the longest string and print out that string.
hint: strings also have the .length property - i.e `"starburst".length` is 9

*/

// YOUR CODE GOES HERE
var colors = ["red", "orange", "magenta", "swampygreen"];
var longestColor = "";

for(var i = 0; i < colors.length; i++) {
    var newColor = colors[i];
    if(newColor.length > longestColor.length) {
        longestColor = newColor;
    }
}
console.log("The longest color is " + longestColor + ". It has " + longestColor.length + " letters.")
