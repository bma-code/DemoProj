const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint for greetings
app.get('/api/greetings', (req, res) => {
    const greetings = [
        "Hello, World!",
        "Hi there!",
        "Welcome!",
        "Greetings!",
        "Hey everyone!",
        "Good day!",
        "Salutations!",
        "Howdy!"
    ];
    res.json({ greetings });
});

// API endpoint for a random greeting
app.get('/api/greeting/random', (req, res) => {
    const greetings = [
        "Hello, World!",
        "Hi there!",
        "Welcome!",
        "Greetings!",
        "Hey everyone!",
        "Good day!",
        "Salutations!",
        "Howdy!"
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    res.json({ greeting: randomGreeting });
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Hello World App is running on http://localhost:${PORT}`);
    console.log(`📁 Serving static files from the 'public' directory`);
    console.log(`🔗 API endpoints:`);
    console.log(`   GET /api/greetings - Get all greetings`);
    console.log(`   GET /api/greeting/random - Get a random greeting`);
});