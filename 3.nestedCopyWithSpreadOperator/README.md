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
