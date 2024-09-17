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
    address: {
      ...originalObject.contact.address
    }
  },
  hobbies: [...originalObject.hobbies]
};

copiedObject.name = 'Jane Doe';
copiedObject.contact.email = 'jane.doe@example.com';
copiedObject.contact.address.city = 'Los Angeles';
copiedObject.hobbies.push('swimming');

console.log('Original Object:', originalObject);
console.log('Copied Object:', copiedObject);

// ------------------
// dont change the code below
// make sure all the comparisons are false
console.log(originalObject === copiedObject); // Should be false
console.log(originalObject.contact === copiedObject.contact); // Should be false
console.log(originalObject.contact.address === copiedObject.contact.address); // Should be false
console.log(originalObject.hobbies === copiedObject.hobbies); // Should be false
