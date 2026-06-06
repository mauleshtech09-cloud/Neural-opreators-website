const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;
const dataFile = path.join(__dirname, 'data', 'messages.json');
const MAKE_WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL ||
  'https://hook.us2.make.com/glgn2dcnof0jb8bdfi2oqe8h48ol6xkm';

// Middleware
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json());

// Ensure data folder exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'));
}

// Ensure data file exists
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify([]));
}

// POST endpoint for contact form
app.post('/api/contact', async (req, res) => {
  try {
    console.log('[contact] Incoming request body:', req.body);

    const {
      fullName,
      businessName,
      email,
      phone,
      automationType,
      budget,
      message,
    } = req.body;

    if (
      !fullName ||
      !businessName ||
      !email ||
      !phone ||
      !automationType ||
      !budget ||
      !message
    ) {
      console.warn('[contact] Validation failed — missing required fields');
      return res.status(400).json({
        error: 'All fields are required',
      });
    }

    const payload = {
      fullName,
      businessName,
      email,
      phone,
      automationType,
      budget,
      message,
    };

    try {
      const webhookResponse = await axios.post(MAKE_WEBHOOK_URL, payload, {
        timeout: 30000,
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('[contact] Make.com webhook success:', webhookResponse.status, webhookResponse.data);
    } catch (webhookError) {
      console.error(
        '[contact] Make.com webhook error:',
        webhookError.response?.status,
        webhookError.response?.data || webhookError.message
      );
      return res.status(502).json({
        error: 'Failed to forward inquiry to automation pipeline.',
      });
    }

    const newMessage = {
      id: Date.now(),
      fullName,
      businessName,
      email,
      phone,
      automationType,
      budget,
      message,
      date: new Date().toISOString(),
    };

    const currentData = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    currentData.push(newMessage);
    fs.writeFileSync(dataFile, JSON.stringify(currentData, null, 2));

    console.log('[contact] Lead saved successfully:', newMessage);
    return res.status(200).json({ success: true, message: 'Message saved successfully.' });
  } catch (error) {
    console.error('[contact] Unexpected server error:', error);
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
