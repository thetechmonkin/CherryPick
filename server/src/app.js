require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/test', (req, res) => {
    res.send('Hello, World! from route');
});

app.use('/', (req, res) => {
    res.send('Hello, World!');
});

try {
    app.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`);
    });
} catch (error) {
    console.error('Error occurred while starting the server:', error);
}