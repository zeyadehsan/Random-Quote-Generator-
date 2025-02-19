const express = require('express');  // Import Express
const app = express();               // Create an Express app
const port = 3000;                   

// Sample quotes
const quotes = [
    "Do what you love.",
    "Keep moving forward.",
    "The best time to start was yesterday. The next best time is now.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Dream big and dare to fail."
];

// Route to get a random quote
app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});


// Start the server
app.listen(port, () => {
    console.log(`✅ Quote API is running at http://localhost:${port}`);
});
