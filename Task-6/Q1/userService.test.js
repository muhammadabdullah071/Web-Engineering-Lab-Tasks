const { createUser } = require("./userService");

describe("createUser", () => {
  test("creates a normalized user for valid input", () => {
    expect(createUser({ name: " Alice ", email: "ALICE@EXAMPLE.COM" })).toEqual({
      id: 1,
      name: "Alice",
      email: "alice@example.com"
    });
  });

  test("rejects input without a name", () => {
    expect(() => createUser({ email: "alice@example.com" })).toThrow(
      "Name is required"
    );
  });

  test("rejects an invalid email", () => {
    expect(() => createUser({ name: "Alice", email: "invalid-email" })).toThrow(
      "A valid email is required"
    );
  });
});
