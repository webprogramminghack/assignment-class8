# Caching Function Results with `WeakMap`

## Objective

Learn how to use the JavaScript `WeakMap` object to cache the results of a function that processes numerical data within an object. This assignment will help you understand how to improve performance by avoiding repeated calculations using caching, while also allowing for efficient memory management.

## Instructions

### 1. Create a Caching Function

You will implement a function called `processData` that processes a given data object containing numeric values (e.g., salaries) and caches the result. The `processData` function should:

- Accept an object as its parameter.
- Check if the result for the given object is already in the cache (a `WeakMap` object).
- If the result is not in the cache, perform some processing on the object, store the result in the cache, and return the result.
- If the result is in the cache, return the cached result directly.

### 2. Define a Sample Data Processing Function

Create a sample function inside `processData` that simulates a computationally intensive task. For this assignment, you will:

- Sum up all numeric values (e.g., salaries) in the object.

### 3. Implement the Caching Logic

- Use a `WeakMap` object to store the results of processing.
- The key in the `WeakMap` should be the object, and the value should be the processed result.

### 4. Test the `processData` Function

- Test the `processData` function by calling it with different objects representing different departments' salaries.
- Ensure that the function only processes the object once for each unique input and returns the cached result on subsequent calls.

## Example Usage

Here’s how your code should be called:

```javascript
let marketingSalary = { Dan: 1000, Emily: 3000, John: 3000, Kate: 5000 };
let devSalary = { Alice: 4000, Bob: 6000, Charlie: 8000 };

let result1 = processData(marketingSalary);
console.log(result1); // Should calculate and return the total salary for the marketing department

let result2 = processData(devSalary);
console.log(result2); // Should calculate and return the total salary for the development department

let result3 = processData(marketingSalary);
console.log(result3); // Should return the cached total salary for the marketing department

let result4 = processData(devSalary);
console.log(result4); // Should return the cached total salary for the development department
```

# Hasil Fungsi Caching dengan `WeakMap`

## Tujuan

Pelajari cara menggunakan objek `WeakMap` JavaScript untuk menyimpan hasil fungsi yang memproses data numerik dalam suatu objek dalam cache. Tugas ini akan membantu Anda memahami cara meningkatkan kinerja dengan menghindari penghitungan berulang menggunakan cache, sekaligus memungkinkan manajemen memori yang efisien.

## Petunjuk

### 1. Buat Fungsi Caching

Anda akan mengimplementasikan fungsi bernama `processData` yang memproses objek data tertentu yang berisi nilai numerik (misalnya gaji) dan menyimpan hasilnya dalam cache. Fungsi `processData` harus:

- Terima objek sebagai parameternya.
- Periksa apakah hasil untuk objek tertentu sudah ada di cache (objek `WeakMap`).
- Jika hasilnya tidak ada di cache, lakukan beberapa pemrosesan pada objek, simpan hasilnya di cache, dan kembalikan hasilnya.
- Jika hasilnya ada di cache, langsung kembalikan hasil cache tersebut.

### 2. Tentukan Contoh Fungsi Pemrosesan Data

Buat fungsi sampel di dalam `processData` yang menyimulasikan tugas komputasi intensif. Untuk tugas ini, Anda akan:

- Jumlahkan semua nilai numerik (misalnya gaji) pada objek.

### 3. Menerapkan Logika Caching

- Gunakan objek `WeakMap` untuk menyimpan hasil pemrosesan.
- Kunci dalam `WeakMap` harus berupa objek, dan nilainya harus berupa hasil yang diproses.

### 4. Uji Fungsi `processData`

- Uji fungsi `processData` dengan memanggilnya dengan objek berbeda yang mewakili gaji departemen berbeda.
- Pastikan fungsi hanya memproses objek satu kali untuk setiap masukan unik dan mengembalikan hasil cache pada panggilan berikutnya.

## Contoh Penggunaan

Beginilah cara kode Anda dipanggil:

```javascript
biarkan pemasaranGaji = { Dan: 1000, Emily: 3000, John: 3000, Kate: 5000 };
biarkan devSalary = { Alice: 4000, Bob: 6000, Charlie: 8000 };

biarkan hasil1 = processData(marketingSalary);
konsol.log(hasil1); // Harus menghitung dan mengembalikan total gaji untuk departemen pemasaran

biarkan hasil2 = processData(devSalary);
konsol.log(hasil2); // Harus menghitung dan mengembalikan total gaji untuk departemen pengembangan

biarkan hasil3 = processData(marketingSalary);
konsol.log(hasil3); // Harus mengembalikan total gaji yang di-cache untuk departemen pemasaran

biarkan result4 = processData(devSalary);
konsol.log(hasil4); // Harus mengembalikan total gaji yang di-cache untuk departemen pengembangan
```
