# Node-Express-js

Express.js is a minimal and flexible Node.js web application framwork that provides a robust set of features for web and mobile applications . It acts as a middleware to help manage requests and routes in our application.

#### Purpose of use

1. Web Applications
2. Middleware
3. Routing
4. Template Engines
5. RESTful APIs
6. Real-time Applications
7. Microservices

#### Web Applications:

Express.js is commonly used for building web applications.With Express , you can define routes for handling different HTTP requests like GET,POST ,PUT,DELETE,ect making it easy to buil RESTfull API or server dynamic contnet.

#### Example:

const express = require("express");
const app = express();

// Define route for serving homepage
app.get('/',(req,res)=>{
res.send("welcome to my website!")

})

//Define route for handling form submission
app.post('/sbmit'(req,res)=>{
// Handle form submission logic
})
app.listen(3000,()=>{
console.log("server is running on port 3000")
})

#### Middleware:

Express provides middleware, which are functions that have access to the request object('req'),the response object ('res'),and the next middlewre function in the application's request-response cycle. Middleware function can perform tasks like parsing request bodies, handling authenitication,logging,error handling,ect

#### example:

const express = require("express");
const app = express();

// Custom middleware for logging requests
app.use((req, res, next) => {
console.log(`${req.methods} request recevied for ${req.url}`);
next();
});

// Route handling logic
// ...

app.listen(3000, () => {
console.log("Server is running on port 3000");
});
