# Logic behind body-parsing
This is just a draw in order to understand the code behind body-parsing middleware. This prove involves the use of streams and events in node.

## Files content:
 1. http-server-basic: Basic HTTP server API requiring native http.
 2. http-server-noBodyParser: HTTP server API with POST method that requests body without framework
 3. http-server-BodyParser: HTTP server API with POST method that requests body with body-parser framework  

## Usage:
1. Run the second or third file with node.
2. Use an API testing like Postman
 * Write a simple JSON body for the input
 * Send a POST request to http://localhost:3000/testRequestBody
 * Check console logs printed in the terminal

## Specific information about environments and libraries used:
 1. body-parser: **ReactJS**

## References:
  Useful links:
  - [Behind the scenes of body parsing in NodeJS](https://medium.com/@09mohit1994/behind-the-scenes-of-body-parsing-in-nodejs-9c4e9f1058c3)
  - [Understanding the idea of middleware in express](https://medium.com/@adamzerner/middleware-in-express-60d75055ba8f)
  - [How body parser works](https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90)
