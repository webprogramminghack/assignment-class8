# Copying a Nested Object Using the Spread Operator

## Objective

Learn how to use the spread (`...`) operator in JavaScript to create a shallow copy of an object and how to handle nested objects manually. This assignment will help you understand how to use the spread operator effectively to copy objects, especially when dealing with nested structures, and how to verify that the copied object is independent of the original.

## Instructions

### 1. Understand the Problem

In JavaScript, copying objects using the spread (`...`) operator creates a shallow copy. This means that while the top-level properties are copied, any nested objects within those properties are still referenced from the original object. To fully copy an object with nested properties, you must manually spread each level of nesting.

### 2. Copy a Nested Object

You will work with an object that has two levels of nesting. Your task is to manually copy this object using the spread operator, ensuring that both the top-level properties and the nested properties are copied independently.

### 3. Modify and Test the Copied Object

After copying the object, modify some properties in the copied object. Then, compare the references between the original and copied objects to verify that they are indeed independent. Log both the original and copied objects to confirm that changes to the copied object do not affect the original object.

### 4. Test Reference Independence

Write code to compare the references between:

1. The outermost original and copied objects.
2. The `contact` objects.
3. The `address` objects within `contact`.
4. The `hobbies` arrays.

All comparisons should return `false`, indicating that the copied object and its nested properties are independent of the original object.

## Example Usage

Here’s how your code should be structured:

```javascript
// Step 1: Create an object with two levels of nested properties
let originalObject = {
  id: 1,
  name: 'John Doe',
  contact: {
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'New York'
    }
  },
  hobbies: ['reading', 'gaming', 'hiking']
};

// Step 2: Manually copy the object using the spread operator
let copiedObject = {
  ...originalObject,
  propertyName: {...originalObject.propertyName}
```

# Menyalin Objek Bersarang Menggunakan Operator Spread

## Tujuan

Pelajari cara menggunakan operator spread (`...`) di JavaScript untuk membuat salinan dangkal suatu objek dan cara menangani objek bertumpuk secara manual. Tugas ini akan membantu Anda memahami cara menggunakan operator spread secara efektif untuk menyalin objek, terutama saat menangani struktur bersarang, dan cara memverifikasi bahwa objek yang disalin tidak bergantung pada aslinya.

## Petunjuk

### 1. Pahami Masalahnya

Dalam JavaScript, menyalin objek menggunakan operator spread (`...`) akan membuat salinan dangkal. Artinya, saat properti tingkat atas disalin, objek apa pun yang bertumpuk di dalam properti tersebut masih direferensikan dari objek aslinya. Untuk sepenuhnya menyalin objek dengan properti bersarang, Anda harus menyebarkan setiap tingkat sarang secara manual.

### 2. Salin Objek Bersarang

Anda akan bekerja dengan objek yang memiliki dua tingkat sarang. Tugas Anda adalah menyalin objek ini secara manual menggunakan operator spread, memastikan bahwa properti tingkat atas dan properti bertumpuk disalin secara independen.

### 3. Memodifikasi dan Menguji Objek yang Disalin

Setelah menyalin objek, ubah beberapa properti di objek yang disalin. Kemudian, bandingkan referensi antara objek asli dan objek salinan untuk memverifikasi bahwa keduanya memang independen. Catat objek asli dan objek yang disalin untuk mengonfirmasi bahwa perubahan pada objek yang disalin tidak memengaruhi objek asli.

### 4. Uji Independensi Referensi

Tulis kode untuk membandingkan referensi antara:

1. Benda asli dan salinan terluar.
2. Objek `kontak`.
3. Objek `alamat` dalam `kontak`.
4. Array `hobi`.

Semua perbandingan harus menghasilkan `false`, yang menunjukkan bahwa objek yang disalin dan properti yang disarangkannya tidak bergantung pada objek aslinya.

## Contoh Penggunaan

Berikut cara menyusun kode Anda:

```javascript
// Langkah 1: Buat objek dengan dua level properti bertingkat
biarkan Objek asli = {
  nomor identitas: 1,
  nama: 'John Doe',
  hubungi: {
    email: 'john.doe@example.com',
    alamat: {
      jalan: '123 Jalan Utama',
      kota: 'New York'
    }
  },
  hobi: ['membaca', 'bermain game', 'mendaki gunung']
};

// Langkah 2: Salin objek secara manual menggunakan operator spread
biarkan disalinObject = {
  ...objek asli,
  propertyName: {...originalObject.propertyName}
```
