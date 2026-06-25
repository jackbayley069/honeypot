const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve your HTML and CSS files
app.use(express.static(__dirname));

// Endpoint for the website to fetch live stats
app.get('/api/stats', (req, res) => {
    fs.readFile(path.join(__dirname, 'stats.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Could not read stats file" });
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Dashboard server running at http://localhost:${PORT}`);
});