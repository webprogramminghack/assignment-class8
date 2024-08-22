'use strict';

function sumNestedArray(arr) {
  // start coding here
  let total = 0;

  arr.forEach((Element) => {
    if (Array.isArray(Element)) {
      total += sumNestedArray(Element);
    } else if (typeof Element === 'number') {
      total += Element;
    }
  });
  return total;
}

let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

let result = sumNestedArray(numbers);
console.log(result);
// Should return 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// Tips:
// You can use if (Array.isArray(element)) to check if an element is an array or not.
