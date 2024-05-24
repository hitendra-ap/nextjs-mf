const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

let counter = 0;

async function startServer() {
    await app.prepare();

    const server = express();
    server.use(bodyParser.json());

    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001'); // Replace 3001 with your desired port
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    server.options('*', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.status(200).end();
    });

    server.get('/api/counter', (req, res) => {
        res.status(200).json({ counter });
    });

    server.post('/api/counter', (req, res) => {
        counter += 1;
        res.status(200).json({ counter });
    });

    server.put('/api/counter', (req, res) => {
        counter -= 1;
        res.status(200).json({ counter });
    });

    server.delete('/api/counter', (req, res) => {
        counter = 0;
        res.status(200).json({ counter });
    });

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    const port = process.env.PORT || 3000;

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });

}

startServer();
