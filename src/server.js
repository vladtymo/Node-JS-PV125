// ------------- create and start Node.js server -------------

const http = require('http');

const address = '127.0.0.1';
const port = 5566;

// create server logic
const server = http.createServer((req, res) => {
    // req - contains HTTP request data (url, query params, headers...)
    // res - used to return result to a client (status, body, headers...)

    switch (req.method) {
        case 'GET':
            res.statusCode = 200; // OK
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello from Node.js server!');
            break;
        case 'POST':
            res.statusCode = 201; // Created
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
                id: 1001,
                username: 'super_admin12',
                email: 'nraegae@gmail.com'
            }));
            break;
        default:
            res.statusCode = 404; // Not Found
            res.setHeader('Content-Type', 'text/plain');
            res.end('Method is not allowed!');
    }
});

// start server
server.listen(port, address, () => {
    console.log(`Server is listening http://${address}:${port}`);
});
