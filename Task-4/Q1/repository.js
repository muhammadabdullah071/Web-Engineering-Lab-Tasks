class InMemoryUserRepository {
  constructor() {
    this.users = [];
  }

  add(user) {
    if (!user || typeof user !== 'object') {
      throw new TypeError('A user object is required.');
    }

    if (this.users.some((existingUser) => existingUser.id === user.id)) {
      throw new Error(`A user with ID ${user.id} already exists.`);
    }

    this.users.push(user);
    return user;
  }

  findAll() {
    return [...this.users];
  }

  findById(id) {
    return this.users.find((user) => user.id === id) || null;
  }
}

module.exports = InMemoryUserRepository;
