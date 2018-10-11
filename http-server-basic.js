// requiring built-in http module
const http = require('http');
// creating a basic server instance
const server = http.createServer();
// declaring a port number
const port = 3000;
// initializing the server
server.listen(port, () => {
  console.log(`Listenting on port ${port}`);
});
