const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();
// using body-parser for url encoded, text and raw
app.use(bodyParser.json());
app.post('/testRequestBody', (request, response) => {
  // body-parser middleware has done the parsing, then
  // we now can access to the sent body
  console.log(request.body);
  // response to complete the request
  response.send('Body received successfully');
});

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
} );
