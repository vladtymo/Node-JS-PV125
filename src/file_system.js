console.log("Hello Node.js!");
const value = Math.floor(Math.random() * 100);

console.log(`Random value: ${value}`);

// ------------- working with File System -------------
// import module syntax: require('module_name')
const fs = require('fs');

const fileName = 'data.txt';
const content = "Some content to write to the file usig Node.js modules...";

fs.writeFile(fileName, content, (err) => {
    if (err)
        console.log(err.message);
    else
        console.log("Operation complete successfully!");
});

fs.readFile(fileName, 'UTF-8', (err, data) => {
    if (err)
        console.log(err.message);
    else
        console.log("File content:", data);
});
