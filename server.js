const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Import the 'fs' module to work with the file system
const app = express();
const port = 3000;

app.use(cors());

// Read the budget data from the JSON file
const budget = JSON.parse(fs.readFileSync('budget.json'));

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World');
});

app.get('/budget', (req, res) => {
    // Send the budget data read from the JSON file as the response
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
