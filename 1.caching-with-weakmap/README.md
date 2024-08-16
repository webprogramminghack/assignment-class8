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
