# Q3: Health Check API

This project provides a simple Express health check endpoint.

## Run the API

```bash
npm install
npm start
```

The server runs at `http://localhost:3000` by default.

## Test the endpoint

Open `http://localhost:3000/ping` in a browser or run:

```bash
curl http://localhost:3000/ping
```

Expected response:

```json
{"message":"pong"}
```
