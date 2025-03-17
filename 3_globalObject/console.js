// Standard message
console.log('Hello, Node.js!');

// Error message
console.error('This is an error message.');

// Warning message
console.warn('This is a warning message.');

// Tabular data
const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
];
console.table(users);

// Measuring execution time
console.time('Timer');
for (let i = 0; i < 1e8; i++) {}  // Sample loop
console.timeEnd('Timer');
