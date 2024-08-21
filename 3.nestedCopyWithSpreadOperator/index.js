// Step 1: Create an object with two levels of nested properties
'use strict';
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

let copiedObject = {
  ...originalObject,
  contact: {
    ...originalObject.contact,
    address: {
      ...originalObject.contact.address,
    },
  },
  hobbies: [...originalObject.hobbies],
};

//modif objcetnya
copiedObject.name = 'Jane Doe';
copiedObject.contact.email = 'jane.doe@example.com';
copiedObject.contact.address.city = 'Los Angeles';
copiedObject.hobbies.push('cooking');

console.log('Original Object:', originalObject);
console.log('Copied Object:', copiedObject);

console.log(originalObject === copiedObject);
console.log(originalObject.contact === copiedObject.contact);
console.log(originalObject.contact.address === copiedObject.contact.address);
console.log(originalObject.hobbies === copiedObject.hobbies);
