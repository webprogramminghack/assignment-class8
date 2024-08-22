# Recursive Function to Sum Numbers in Nested Arrays

## Objective

Learn how to use recursion in JavaScript by implementing a function that calculates the sum of all numbers within a deeply nested array. This assignment will help you understand how to work with recursive functions to process nested data structures, specifically arrays within arrays.

## Instructions

### 1. Implement a Recursive Function

You will implement a function called `sumNestedArray` that:

- Accepts an array as its parameter.
- Iterates through each element in the array.
- If the element is an array, it should recursively call itself on this sub-array and add the result to the running total.
- If the element is a number, it should be added to the running total.

### 2. Handle Different Levels of Nesting

Ensure that the function can handle arrays nested to any depth and still correctly sum all the numbers.

### 3. Test the `sumNestedArray` Function

Test the function by calling it with various nested array structures and verify that it correctly calculates the total sum of all numbers.

## Example Usage

Here’s how your code should be structured:

```javascript
// Step 1: Create a nested array structure
let numbers = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

// Step 2: Implement the recursive function
function sumNestedArray(arr) {
  // Your recursive code goes here
}

// Step 3: Test the sumNestedArray function
let totalSum = sumNestedArray(numbers);
console.log(totalSum); // Should calculate and return the sum of all numbers
```

# Fungsi Rekursif untuk Menjumlahkan Angka dalam Array Bersarang

## Tujuan

Pelajari cara menggunakan rekursi dalam JavaScript dengan mengimplementasikan fungsi yang menghitung jumlah semua angka dalam array yang sangat bertingkat. Tugas ini akan membantu Anda memahami cara bekerja dengan fungsi rekursif untuk memproses struktur data bertumpuk, khususnya array di dalam array.

## Petunjuk

### 1. Menerapkan Fungsi Rekursif

Anda akan mengimplementasikan fungsi bernama `sumNestedArray` yang:

- Menerima array sebagai parameternya.
- Iterasi setiap elemen dalam array.
- Jika elemennya adalah array, elemen tersebut harus memanggil dirinya sendiri secara rekursif pada sub-array ini dan menambahkan hasilnya ke total yang berjalan.
- Jika elemennya berupa angka, maka harus ditambahkan ke total berjalan.

### 2. Tangani Berbagai Tingkat Penyusunan

Pastikan bahwa fungsi tersebut dapat menangani array yang disarangkan hingga kedalaman berapa pun dan masih menjumlahkan semua angka dengan benar.

### 3. Uji Fungsi `sumNestedArray`

Uji fungsi dengan memanggilnya dengan berbagai struktur array bersarang dan verifikasi bahwa fungsi tersebut menghitung jumlah total semua angka dengan benar.

## Contoh Penggunaan

Berikut cara menyusun kode Anda:

```javascript
// Langkah 1: Buat struktur array bersarang
misalkan angka = [1, [2, 3], [4, [5, 6]], 7, [[8], 9], 10];

// Langkah 2: Implementasikan fungsi rekursif
fungsi jumlahNestedArray(arr) {
  // Kode rekursif Anda ada di sini
}

// Langkah 3: Uji fungsi sumNestedArray
misalkan totalSum = sumNestedArray(angka);
konsol.log(totalJumlah); // Harus menghitung dan mengembalikan jumlah semua angka
```
