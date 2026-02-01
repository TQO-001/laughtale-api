const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.json({ 
    status: "online", 
    message: "Welcome to the LaughTale API",
    version: "1.0.0" 
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});