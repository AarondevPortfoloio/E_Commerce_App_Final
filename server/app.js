const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 4988;

app.use(cors());
app.use(express.json()); // Parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, this is the Express server!');
  });

// Handle the form submission from React
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;
   
 // Debugging: Log the received email and password


  // Hardcoded credentials
  const hardcodedEmail = 'pizza';
  const hardcodedPassword = 'burgers';

  if (email === hardcodedEmail && password === hardcodedPassword) {
  console.log(`Email: ${email}, Password: ${password}`);
   
    res.json({ success: true, message: 'User registered successfully!' });
  } else {
    res.json({ success: false, message: 'Invalid input' });
    console.log(`Email: ${email}, Password: ${password}`);
  }
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});