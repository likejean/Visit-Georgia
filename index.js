const express = require('express');
const http = require('http');
const routes = require('./server/api');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(routes);

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})