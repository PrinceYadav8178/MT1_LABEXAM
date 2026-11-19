const fs = require('fs');

// CREATE - Create a file
fs.writeFileSync('demo.txt', 'Hello World!');

// READ - Read file content
const data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:', data);

// UPDATE - Append content to file
fs.appendFileSync('demo.txt', '\nWelcome to Node.js');

// DELETE - Delete a file

fs.unlinkSync('demo.txt');

console.log('CRUD operations completed successfully!');