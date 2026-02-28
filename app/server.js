const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "DevOps AWS Project Running 🚀",
    hostname: os.hostname(),
    timestamp: new Date(),
    environment: process.env.NODE_ENV || "development"
  });
});

// Health check endpoint (important for Kubernetes)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: "OK"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
