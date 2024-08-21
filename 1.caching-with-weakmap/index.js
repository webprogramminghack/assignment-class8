//Buat weakmap
const cache = new WeakMap();

//Buat fungsi salaries
function processData(salaries) {
  //cek chace
  if (cache.has(salaries)) {
    return cache.get(salaries);
  }

  //hitung total
  const result = computeTotal(salaries);

  //simpan ke resultnya
  cache.set(salaries, result);

  return result;
}

function computeTotal(obj) {
  //jumlahkan semuanya ke dalam object
  return Object.values(obj).reduce((total, value) => total + value, 0);
}

let marketingSalary = { Dan: 1000, Emily: 3000, John: 3000, Kate: 5000 };
let devSalary = { Alice: 4000, Bob: 6000, Charlie: 8000 };

let result1 = processData(marketingSalary);
console.log(result1);

let result2 = processData(devSalary);
console.log(result2);

let result3 = processData(marketingSalary);
console.log(result3);

let result4 = processData(devSalary);
console.log(result4);
