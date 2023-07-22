const path = require("path");

console.log(path.sep);

const filePath = path.join("/another/", "sub", "index.js");

console.log(filePath);

const baseName = path.basename(filePath);

console.log(baseName);

const absolute = path.join(__dirname, "another", "sub", "index.js");

console.log(absolute);
