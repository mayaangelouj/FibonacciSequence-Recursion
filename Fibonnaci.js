// Fibonacci using loops
function fibonacciLoop(n) {
    // Start with the first two numbers in the sequence
    let a = 0;
    let b = 1;
    let temp;

    // If n is 0, return 0 as the Fibonacci number
    if (n === 0) return a;

    // Use a loop to calculate the Fibonacci number
    for (let i = 2; i <= n; i++) {
        // Add the last two numbers to get the next one
        temp = a + b;
        // Move the numbers forward in the sequence
        a = b;
        b = temp;
    }
    
    // Return the nth Fibonacci number
    return b;
}

// Fibonacci using recursion
function fibonacciRecursive(n) {
    // Base cases: return n if it's 0 or 1
    if (n <= 1) return n;
    
    // Call the function inside itself to add numbers
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Testing the functions
let n= 10; // Let's calculate the 10th Fibonacci number

// Test and print results for both methods
console.log("Fibonacci (" + n + ") using loops: " + fibonacciLoop(n));
console.log("Fibonacci (" + n + ") using recursion: " + fibonacciRecursive(n));



//Answer:
//Fibonacci (10) using loops: 55
//Fibonacci (10) using recursion: 55
