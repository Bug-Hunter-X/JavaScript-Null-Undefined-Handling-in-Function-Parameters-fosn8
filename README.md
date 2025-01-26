# JavaScript Null/Undefined Handling in Function Parameters

This repository demonstrates a common error in JavaScript: incorrect handling of `null` or `undefined` values passed as function parameters.

The `bug.js` file shows a function that doesn't explicitly handle these cases. The `bugSolution.js` file provides a corrected version.

## Bug

Passing `null` or `undefined` to a function without proper checks can lead to unexpected results, such as errors or incorrect calculations.  The initial example demonstrates the issue.

## Solution

The solution involves explicitly checking for `null` or `undefined` values at the start of the function and taking appropriate action (e.g., returning a default value, throwing an error, or performing alternative logic).