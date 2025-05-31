// Load environment variables
require('dotenv').config();

const express = require('express');
const app = express();

// Get port from .env or Heroku's env
const PORT = process.env.PORT || 3000;

// Default route
app.get('/', (req, res) => {
  res.send('🤖 CamHack Bot is running successfully!');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server started on http://localhost:${PORT}`);
});
