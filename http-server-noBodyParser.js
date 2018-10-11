// requiring built-in http module
const http = require('http');
// declaring a port number
const port = 3000;
// creating a server instance that handles a POST request with a body
var server = http.createServer(
  (request, response) => {
    if (request.method === 'POST' && request.url === '/testRequestBody') {
      let body = [];
      // below we are going to listen to `data` event emitted
      // on receiving a chunk of data.
      request.on('data', (chunk) => {
        // data in small chunks of buffer will be received
        // and the console.log(chunk) will print the complete data
        // as well as the was it is comprised in the buffer
        console.log(chunk);
        //  pushing all the chunks to be concatenated later
        body.push(chunk);
      });
      // listening to the `end` event to track the end of data retrival
      request.on('end', () => {
        // concatenating all the buffer elements in the array
        // and stringifying them to get body which we see while
        // working with body-parser or similar modules
        body = Buffer.concat(body).toString();
        console.log(JSON.parse(body));
        response.end(body);
      });
    } else {
      response.statusCode = 404;
      response.end();
    }
  }
);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
