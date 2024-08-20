// // please use weakmap to cache the total salary
// start coding here

// Step 1: Create a WeakMap to cache results
const cacheMap = new WeakMap();

function processData(salaries) {
  // Step 3: Check if the result is already cached
  if (cacheMap.has(salaries)) {
    console.log('Returning cached result');
    return cacheMap.get(salaries);
  }

  // Step 2: sum all numeric values
  let total = 0;
  total = Object.values(salaries).reduce((sum, salary) => sum + salary, 0);

  // Cache the result in WeakMap
  cacheMap.set(salaries, total);

  // Return the processed result
  return total;
}

let marketingSalary = { Dan: 1000, Emily: 3000, John: 3000, Kate: 5000 };
let devSalary = { Alice: 4000, Bob: 6000, Charlie: 8000 };

let result1 = processData(marketingSalary);
console.log(result1); // Should calculate and return the total salary for the marketing department (12000)

let result2 = processData(devSalary);
console.log(result2); // Should calculate and return the total salary for the development department (18000)

let result3 = processData(marketingSalary);
console.log(result3); // Should return the cached total salary for the marketing department (12000)

let result4 = processData(devSalary);
console.log(result4); // Should return the cached total salary for the development department (18000)
