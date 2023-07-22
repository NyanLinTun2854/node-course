const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("Welcome to about page.");
    res.end();
  } else {
    res.end(`<h1>Opps</h1>`);
  }
});

server.listen(5000);
