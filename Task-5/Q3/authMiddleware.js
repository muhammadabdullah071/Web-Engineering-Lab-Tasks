const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authorization = req.get('authorization');
  const [scheme, token] = authorization ? authorization.split(' ') : [];

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'A Bearer token is required.' });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET || 'task-5-development-secret');
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'The token is invalid or expired.' });
  }
}

module.exports = authenticateToken;
