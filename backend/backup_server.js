const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;
const dataFile = path.join(__dirname, 'data', 'messages.json');

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ensure data folder exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Ensure data file exists
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify([]));
}

// POST endpoint for contact form
app.post('/api/contact', (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      message,
      date: new Date().toISOString()
    };

    const currentData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    currentData.push(newMessage);
    
    fs.writeFileSync(dataFile, JSON.stringify(currentData, null, 2));

    console.log('New lead received:', newMessage);
    return res.status(200).json({ success: true, message: 'Message saved successfully.' });
  } catch (error) {
    console.error('Error saving message:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

// GET endpoint to view leads (for admin usage)
app.get('/api/leads', (req, res) => {
  try {
    const currentData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    return res.status(200).json(currentData);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
