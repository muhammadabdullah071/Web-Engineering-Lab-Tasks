const express = require("express");

const app = express();

app.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

app.get("/users", (req, res) => {
  res.status(200).json({
    users: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]
  });
});

module.exports = app;
