
function uniqueItems(arr) {
    return new Set(arr);
}

/**
 * Only unique items are allowed.

You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements. 

 */


console.log(uniqueItems([1, 2, 3, 3, 4, 4, 5]));
console.log(uniqueItems([6, 7, 8, 9, 9, 9]));