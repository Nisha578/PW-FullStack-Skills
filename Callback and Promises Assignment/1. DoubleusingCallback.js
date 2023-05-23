// function 
function double(arr, callback) {
  const doubleArr = arr.map((num) => {
    return callback(num);
  });
  return doubleArr;
}

const originalArray = [1, 2, 3, 4];

// callback function
function callback(num) {
  return num * 2;
}

const doubleArray = double(originalArray, callback);

console.log(doubleArray);

// output:
// [ 2, 4, 6, 8 ]
