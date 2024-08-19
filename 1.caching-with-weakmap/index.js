// please use weakmap to cache the total salary

function processData(salaries) {
  // start coding here
  let weakMap = new WeakMap();
  // weakMap.set(salaries, 'data has been precessed'); // testing

  if (!weakMap.has(salaries)) {
    let val = Object.values(salaries);
    val = val.reduce((a, c) => a + c, 0);

    console.log('process init data');

    weakMap.set(salaries, val);
    return val;
  }
  return weakMap.get(salaries);
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
