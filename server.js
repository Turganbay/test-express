const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world. My test Express');
});

app.listen(port, () => {
    console.info('server in running', port);
});
