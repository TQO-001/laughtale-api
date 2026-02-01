const express = require('express');
const cors = require('cors'); // 1. Import it
const app = express();
const PORT = 8000;

// 2. Configure it
app.use(cors({
  origin: ['https://laughtale.co.za', 'https://www.laughtale.co.za'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

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