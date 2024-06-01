const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit-email', (req, res) => {
  const email = req.body.email;
  // Append the email to a file
  fs.appendFileSync('sms.txt', `${email}\n`);
  res.send('Email received');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
