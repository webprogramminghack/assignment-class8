function sumNestedArray(arr) {
  let sum = 0

  for (let number of arr) {
    Array.isArray(number) ? sum += sumNestedArray(number) : sum += number
  }

  return sum;
}

let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

let result = sumNestedArray(numbers);
console.log(result);
// Should return 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// Tips:
// You can use if (Array.isArray(element)) to check if an element is an array or not.
