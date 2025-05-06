const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/user', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send({ message: 'Name is required' });
    }
    res.status(201).send({ message: `User ${name} created` });
});

app.get('/api/health', (req, res) => {
    res.send({ status: 'ok' });
});

module.exports = app;
