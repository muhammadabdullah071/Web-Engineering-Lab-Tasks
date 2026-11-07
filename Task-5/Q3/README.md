# Q3: JWT Middleware and Protected Route

This complete example provides registration, login, JWT verification middleware,
and a protected `GET /profile` route.

```bash
npm install
npm start
```

Create a user and save the returned token from login:

```bash
curl -X POST http://localhost:3003/users -H "Content-Type: application/json" -d "{\"name\":\"Ali Khan\",\"email\":\"ali@example.com\",\"password\":\"secret123\"}"
curl -X POST http://localhost:3003/login -H "Content-Type: application/json" -d "{\"email\":\"ali@example.com\",\"password\":\"secret123\"}"
```

Without a token, the protected route returns `401`:

```bash
curl http://localhost:3003/profile
```

With a token:

```bash
curl http://localhost:3003/profile -H "Authorization: Bearer YOUR_TOKEN"
```
