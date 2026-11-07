function createUser(user) {
  if (!user || typeof user.name !== "string" || user.name.trim() === "") {
    throw new Error("Name is required");
  }

  if (typeof user.email !== "string" || !user.email.includes("@")) {
    throw new Error("A valid email is required");
  }

  return {
    id: 1,
    name: user.name.trim(),
    email: user.email.trim().toLowerCase()
  };
}

module.exports = { createUser };
