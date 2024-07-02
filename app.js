const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to calculate the average
app.post('/calculate', (req, res) => {
  const numbers = req.body.numbers;

  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res.status(400).json({ error: 'Invalid input. Please provide an array of numbers.' });
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;

  res.json({ average });
});

app.listen(port, () => {
  console.log(`Average calculator service running on port ${port}`);
});
