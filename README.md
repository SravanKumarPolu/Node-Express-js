# Node-Express-js

Node.js is a runtime environment that allows you to execute JavaScript code server-side. It's particularly popular for building scalable network applications due to its non-blocking, event-driven architecture. However, Node.js alone doesn't provide everything you need to build a web application. That's where Express.js comes in.

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It acts as a middleware to help manage requests and routes in your application. Here's why we need Node.js with Express.js and where we can use it.

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

Microservices refer to an architectural style where a software application is composed of small , independent services,each serving a specific business function. these services are loosely coupled,meaning they can be developed,deployed, and scaled independently.Microservices architecture aims to improve agility, scalability,and resilience by breaking down monolithic applications into smaller,more manageable components.This approach enables teams to work on different services simultaneously.

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

#### Routing

Express provides a simple and effective way to define routes for our appllication. you can define routes based on HTTP methods and URL patterns.This makes it easy to organize our application's logic into manageable chunks.

#### Example:

const express = require('express');
const app = express();

//define routes
app.get('/users',(req,res)=>{
// Handle logic for fetching users
})

app.post('/user',(req,res)=>{
// Handle logic for creating a new user  
})

//More routes...

app.listen(3000, () => {
console.log('Server is running on port 3000');
});

#### RESTful APIs:

REST APIs stands for Representational State Transfer Application Programming Interface.it is an architectural style for designing networked applications.REST is commonly used in web development for building APIs that allow different systems to communicate with eachother over HTTP in a standardized way.
REST ful APIs typeically return data in formats such as JSON or XML .

Express is widely used for building RESTful APIs.
with features like route and parameters, query parameters, request body parsing, and response formatting, Express simplifies the process of building APIs.

#### Example:

const express = require('express');
const app = express();

// Define routes for CRUD operations on resource 'users'
app.get('/users', (req, res) => {
// Get all users
});

app.post('/users', (req, res) => {
// Create a new user
});

app.put('/users/:id', (req, res) => {
// Update user with given id
});

app.delete('/users/:id', (req, res) => {
// Delete user with given id
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});

#### Microservices:

Express is lightweight and flexible ,making it suitable for building microservices architectures.Each microservice can be built using Express and Communicate with other services via HTTP or message queues.

#### Example:

const express = require('express');
const app = express();

// Define routes for user management
app.get('/users', (req, res) => {
// Get all users
});

app.post('/users', (req, res) => {
// Create a new user
});

// More routes...

app.listen(3001, () => {
console.log('User microservice is running on port 3001');
});

#### Live-Time-Application

Express can be used with WebSockets and libraries like Socket.io to build real-time applications such as chat applications, multiplayer games, live dashboards, etc.

#### Example:

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
console.log('A user connected');

socket.on('chat message', (msg) => {
console.log('message: ' + msg);
io.emit('chat message', msg);
});

socket.on('disconnect', () => {
console.log('User disconnected');
});
});

server.listen(3000, () => {
console.log('Server is running on port 3000');
});

#### Single-page Applications (SPAs):

Express can serve as the backend for SPAs built using frontend frameworks like React, Angular, or Vue.js. It can handle API requests and serve the initial HTML file, allowing the frontend framework to handle client-side routing and rendering.

#### Example:

const express = require('express');
const app = express();

// Serve static files (e.g., HTML, CSS, JavaScript)
app.use(express.static('public'));

// API routes for serving data to the SPA
app.get('/api/data', (req, res) => {
// Handle API logic
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});
