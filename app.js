const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from me node js and aws");
}).listen(3000, () => {
  console.log("Server running on port 3000");
});