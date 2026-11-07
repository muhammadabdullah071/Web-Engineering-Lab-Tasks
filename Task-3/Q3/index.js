const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Health check API is running on http://localhost:${PORT}`);
});
