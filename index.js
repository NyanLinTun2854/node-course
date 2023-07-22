const sayHi = require("./function");
const { name1, name2 } = require("./names");
const { items, data } = require("./modules");

sayHi(name1);
sayHi(name2);
console.log(items);
console.log(data);
