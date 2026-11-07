const express = require('express');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./authMiddleware');

const app = express();
const PORT = process.env.PORT || 3003;
const JWT_SECRET = process.env.JWT_SECRET || 'task-5-development-secret';
const users = [];
let nextId = 1;

app.use(express.json());

function publicUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;

  if (
    typeof name !== 'string' ||
    !name.trim() ||
    typeof email !== 'string' ||
    !email.trim() ||
    typeof password !== 'string' ||
    password.length < 6
  ) {
    return res.status(400).json({
      error: 'name, email, and a password of at least 6 characters are required.'
    });
  }

  const normalizedEmail = email.trim().toLowerCase();
  if (users.some((user) => user.email === normalizedEmail)) {
    return res.status(409).json({ error: 'A user with that email already exists.' });
  }

  const user = {
    id: nextId++,
    name: name.trim(),
    email: normalizedEmail,
    password
  };
  users.push(user);
  return res.status(201).json({ user: publicUser(user) });
});

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

app.get('/profile', authenticateToken, (req, res) => {
  const user = users.find((candidate) => candidate.id === req.user.sub);
  if (!user) {
    return res.status(404).json({ error: 'User not found.' });
  }

  return res.json({ user: publicUser(user) });
});

app.listen(PORT, () => {
  console.log(`Q3 protected API is running on http://localhost:${PORT}`);
});
