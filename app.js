const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("Welcome to our home page.");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history.");
    return;
  }

  res.end(`
    <h1>Oops!</h1>
    <a href="/">back home</a>
  `);
});

server.listen(3000);
