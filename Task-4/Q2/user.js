class User {
  constructor(id, name, email) {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error('User ID must be a positive integer.');
    }

    if (typeof name !== 'string' || name.trim().length === 0) {
      throw new Error('User name is required.');
    }

    if (
      typeof email !== 'string' ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
      throw new Error('A valid user email is required.');
    }

    this.id = id;
    this.name = name.trim();
    this.email = email.trim().toLowerCase();
  }
}

module.exports = User;
