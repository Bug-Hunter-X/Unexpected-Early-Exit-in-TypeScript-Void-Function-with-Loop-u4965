# Unexpected Early Exit in TypeScript Void Function with Loop

This repository demonstrates a common error in TypeScript: an unexpected early exit in a void function containing a loop.  The `printNumbers1` function is designed to print numbers from 1 to n, but due to the `return` statement inside the loop, it stops prematurely when `i` reaches 3. This highlights the importance of careful consideration of return statements in loops within functions that are declared with a `void` return type.  The solution demonstrates how to correctly implement the loop to run to completion.

## How to reproduce

1. Clone this repository.
2. Navigate to the root directory.
3. Compile and run the TypeScript code using a TypeScript compiler (tsc) and a Node.js runtime (node): 
   ```bash
tsc bug.ts && node bug.js
tsc bugSolution.ts && node bugSolution.js
   ```

Observe the different outputs from `printNumbers` and `printNumbers1`. 
