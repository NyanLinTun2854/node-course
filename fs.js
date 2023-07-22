const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

// const first = readFileSync("./another/first.txt", "utf-8");
// const second = readFileSync("./another/second.txt", "utf-8");

// console.log(first, second);

// writeFileSync("./another/first-second.txt", `here ${first} ${second}`, {
//   flag: "a",
// });

readFile("./another/first.txt", "utf-8", (err, result) => {
  if (err) {
    return;
  }
  let first = result;
  readFile("./another/second.txt", "utf-8", (err, result) => {
    if (err) {
      return;
    }
    let second = result;
    writeFile(
      "./another/first-async.txt",
      `here ${first}, ${second}`,
      (err, result) => {
        console.log(result);
      }
    );
  });
});
