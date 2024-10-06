// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function Expression for dividing two numbers
const divide = function(a, b) {
    return a / b;
};

// Function Expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow Function with implicit return to add two numbers
const add = (a, b) => a + b; // Updated to ensure the arrow function exists

// Arrow Function with implicit return for squaring a number
const square = x => x ** 2;

// Arrow Function with explicit return
const addNumbers = (a, b) => {
    console.log(`Adding ${a} and ${b}`);
    return a + b;
};

// Using Arrow Function with .map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // Returns [2, 4, 6, 8, 10]

// Using Arrow Function in a different context (e.g., manipulating DOM elements)
const overdueTodoItems = document.querySelectorAll('.todo-item');
const finishedItems = Array.from(overdueTodoItems).map(item => {
    item.className = 'complete'; // Mark each item as complete
    return item;
});

// Example Usage
console.log(greet('Alice')); // Output: Hello, Alice!
console.log(multiply(5, 10)); // Output: 50
console.log(divide(2000, 100)); // Output: 20
console.log(square(4)); // Output: 16
console.log(addNumbers(3, 7)); // Output: Adding 3 and 7 \n 10
console.log(add(10, 5)); // Output: 15
console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(finishedItems); // Logs the modified DOM elements

// Example of using an arrow function in billing software
const lapsedUserAccounts = [
    { address: 'user1@example.com' },
    { address: 'user2@example.com' },
    { address: 'user3@example.com' }
];

const sendBillTo = (address) => {
    console.log(`Bill sent to: ${address}`);
};

// Sending bills to all lapsed user accounts
lapsedUserAccounts.map(user => sendBillTo(user.address));

