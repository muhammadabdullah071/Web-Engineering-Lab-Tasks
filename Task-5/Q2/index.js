const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3002;
const JWT_SECRET = process.env.JWT_SECRET || 'task-5-development-secret';

const users = [
  { id: 1, name: 'Ali Khan', email: 'ali@example.com', password: 'secret123' }
];

app.use(express.json());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (candidate) => candidate.email === email && candidate.password === password
  );

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password.' });
  }

  const token = jwt.sign(
    { sub: user.id, email: user.email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Q2 login API is running on http://localhost:${PORT}`);
});
