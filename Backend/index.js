const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

// Example API route
app.post('/api/data', (req, res) => {
    const data = req.body;
    console.log(data);
    res.status(200).json({ message: 'Data received successfully!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
