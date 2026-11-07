const express = require('express');
const InMemoryUserRepository = require('./repository');

const app = express();
const repository = new InMemoryUserRepository();
const PORT = process.env.PORT || 3001;

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
  if (repository.findByEmail(normalizedEmail)) {
    return res.status(409).json({ error: 'A user with that email already exists.' });
  }

  const user = repository.add({
    name: name.trim(),
    email: normalizedEmail,
    password
  });

  return res.status(201).json({ user: publicUser(user) });
});

app.listen(PORT, () => {
  console.log(`Q1 registration API is running on http://localhost:${PORT}`);
});
