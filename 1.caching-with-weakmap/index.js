// please use weakmap to cache the total salary
let cache = new WeakMap();

function processData(salaries) {
  // start coding here
  if (!cache.has(salaries)) {
    let result = Object.values(salaries).reduce((sum, current) => sum + current, 0);
    cache.set(salaries, result);
    
    console.log('from process');
    return result;
  }

  console.log('from cache');
  return cache.get(salaries);
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
