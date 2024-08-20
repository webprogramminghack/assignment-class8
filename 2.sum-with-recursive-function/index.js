function sumNestedArray(arr) {
  // start coding here
  let result = 0;

  for (let item of arr) {
    // If the element is an array, it should recursively call itself on this sub-array and add the result to the running total.
    if (Array.isArray(item)) {
      result += sumNestedArray(item);
      // If the element is a number, it should be added to the running total.
    } else if (typeof item == 'number') {
      result += item;
    }
  }

  return result;
}

let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

let result = sumNestedArray(numbers);
console.log(result);
// Should return 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// Tips:
// You can use if (Array.isArray(element)) to check if an element is an array or not.
