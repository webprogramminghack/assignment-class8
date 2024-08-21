'use strict';

function sumNestedArray(arr) {
  let total = 0;

  for (let element of arr) {
    if (Array.isArray(element)) {
      total += sumNestedArray(element);
    } else if (typeof element === 'number') {
      //buat totalnya
      total += element;
    }
  }

  return total;
}

let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

// hitung total
let totalSum = sumNestedArray(numbers);
console.log(totalSum);

let numbers2 = [1, [2, [3, [4, [5]]]]];
console.log(sumNestedArray(numbers2));

let numbers3 = [1, 2, [3, 4], [5, [6, [7, [8, [9]]]]]];
console.log(sumNestedArray(numbers3));
