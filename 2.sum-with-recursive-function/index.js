function sumNestedArray(arr) {
  // start coding here

  /**
   * 
   * 1. Accepts an array as its parameter.
   * 2. Iterates through each element in the array.
   * 3. If the element is an array, it should recursively call itself on this sub-array and add the result to the running total.
   * 4. If the element is a number, it should be added to the running total.
   * 
   */

  let total = 0;
  
  for (const item of arr) {
    // console.log(item);

    if (Array.isArray(item)) {

      // recursive, reduce
      // console.log('array :>> ', item);
      total += sumNestedArray(item);

    } else {

      // reduce
      // console.log('number :>> ', item);
      total += item;

    }
    
  }

  return total;
}

let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

let result = sumNestedArray(numbers);
console.log(result);
// Should return 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// Tips:
// You can use if (Array.isArray(element)) to check if an element is an array or not.

