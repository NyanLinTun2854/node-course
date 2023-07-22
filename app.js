const something = require("lodash");

const arr = [1, [2, [3, [4]]]];

const newA = something.flattenDeep(arr);

console.log(newA);
