const request = require("supertest");
const app = require("./app");

describe("API endpoints", () => {
  test("GET /ping returns a successful response", async () => {
    const response = await request(app).get("/ping");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "pong" });
  });

  test("GET /users returns the expected response structure", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      users: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
      ]
    });
    expect(Array.isArray(response.body.users)).toBe(true);
  });
});
