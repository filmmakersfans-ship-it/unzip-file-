const express = require('express');
const path = require('path');

const app = express();

// Railway provides the PORT env variable automatically
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Simple health-check route (handy for Railway deploy checks)
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
