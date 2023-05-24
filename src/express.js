const express = require('express'),
    app = express();

const fs = require('fs');

const address = '127.0.0.1';
const port = 5567;

// -------- server logic --------

// route? - optional part
app.get('/api/welcome', (req, res) => {
    res.status(200)
        .type('text')
        .send('Welcome to API developed using Node.js Express.');
});
app.get('/api/users', (req, res) => {


    fs.readFile("users.json", (err, data) => {
        if (err)
            res.status(500).type('text').send(err.message);
        else
            res.status(200).type('json').send(data);
    });
});

// route parameter: 'url/:param_name'
app.post('/api/users/:id/:username', (req, res) => {
    // get route parameters value
    const id = req.params.id;
    const username = req.params.username;

    res.status(201).type('text').send(`User ${username} with ID of ${id} was created! (route params)`);
});

// query parameter: 'url?param1=value&param2=value'
app.post('/api/users', (req, res) => {
    // get query parameters value
    const id = req.query.id;
    const username = req.query.username;

    res.status(201).type('text').send(`User ${username} with ID of ${id} was created! (query params)`);
});

app.listen(port, address, () => {
    console.log(`Server is listening http://${address}:${port}`);
});
