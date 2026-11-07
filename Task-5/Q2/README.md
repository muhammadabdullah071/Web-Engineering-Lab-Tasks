# Q2: Login and JWT Generation

The in-memory repository contains the demonstration account
`ali@example.com` / `secret123`. `POST /login` validates these credentials
and returns a one-hour JWT.

```bash
npm install
npm start
```

```bash
curl -X POST http://localhost:3002/login -H "Content-Type: application/json" -d "{\"email\":\"ali@example.com\",\"password\":\"secret123\"}"
```

Set `JWT_SECRET` in a real deployment; the fallback is only for this lab.
