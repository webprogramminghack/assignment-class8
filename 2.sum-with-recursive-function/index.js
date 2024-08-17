function sumNestedArray(arr) {
  // start coding here
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (Array.isArray(el)) {
      // console.log(el, '<<< 9');
      sum += sumNestedArray(el);
    } else if (typeof el === 'number') {
      // console.log(el, '<<< 12');
      sum += el;
    }
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
