const fs = require('fs');

// Create a Buffer with binary data
const binaryData = Buffer.from('Hello, this is binary data!');
console.log(binaryData,"binaty data");

// Write the buffer to a file
fs.writeFile('binaryData.data', binaryData, (err) => {
    if (err) {
        console.error('Error writing binary data:', err);
        return;
    }
    console.log('Binary data written successfully!');
});
