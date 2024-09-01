let originalObject = {
  id: 1,
  name: 'John Doe',
  contact: {
    email: 'john.doe@example.com',
    address: {
      street: '123 Main St',
      city: 'New York',
    },
  },
  hobbies: ['reading', 'gaming', 'hiking'],
};

// Manually copy the object using the spread operator, use the originalObject as the source
// edit the code below
let copiedObject = {
  ...originalObject,
  contact: {
    ...originalObject.contact,
    address: { ...originalObject.contact.address },

    hobbies: [...originalObject.hobbies],
  },
};

//mengubah beberapa properti pada objek yang disalin
copiedObject.id = 2;
copiedObject.contact.email = 'jane.doe@example.com';
copiedObject.contact.address.city = 'San Francisco';
copiedObject.hobbies.push('coding');

// ------------------
// dont change the code below
// make sure all the comparisons are false
console.log(originalObject === copiedObject); // Should be false
console.log(originalObject.contact === copiedObject.contact); // Should be false
console.log(originalObject.contact.address === copiedObject.contact.address); // Should be false
console.log(originalObject.hobbies === copiedObject.hobbies); // Should be false

// menampilkan objek asli dan objek yang disalin
console.log('Original Object:', originalObject);
console.log('CopiedObject:', copiedObject);
