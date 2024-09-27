function sumNestedArray(arr) {
  // start coding here
  function sumNestedArray1(item){
    if (!Array.isArray(item)) {
      return arr;
    } else {
      let val = 0;
      for (let i of item) {
        val += sumNestedArray(i);
      }
      return val;
    }  
  }
  let result = sumNestedArray1(arr);
  return result;
  
}

let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

let result = sumNestedArray(numbers);
console.log(result);
// Should return 55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// Tips:
// You can use if (Array.isArray(element)) to check if an element is an array or not.
