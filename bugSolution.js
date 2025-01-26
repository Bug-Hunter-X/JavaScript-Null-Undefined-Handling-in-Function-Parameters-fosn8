function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Return 0 if either a or b is null or undefined
  }
  // ... rest of the function
  return a + b; // Example operation
}