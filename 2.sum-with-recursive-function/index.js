function sumNestedArray(arr) {
  // start coding here
  return arr.reduce((sum, current) => {
    if (Array.isArray(current)) {
      return sum + sumNestedArray(current);
    } else {
      return sum + current;
    }
  }, 0);
}

let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

let result = sumNestedArray(numbers);
console.log(result);
// Should return 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// Tips:
// You can use if (Array.isArray(element)) to check if an element is an array or not.
