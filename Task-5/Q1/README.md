# Q1: User Registration

This Express API stores users in an in-memory repository and exposes `POST /users`.
The response never includes the submitted password.

```bash
npm install
npm start
```

Test it with:

```bash
curl -X POST http://localhost:3001/users -H "Content-Type: application/json" -d "{\"name\":\"Ali Khan\",\"email\":\"ali@example.com\",\"password\":\"secret123\"}"
```
