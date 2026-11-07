class InMemoryUserRepository {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  add(user) {
    const savedUser = { id: this.nextId++, ...user };
    this.users.push(savedUser);
    return savedUser;
  }

  findByEmail(email) {
    return this.users.find((user) => user.email === email) || null;
  }
}

module.exports = InMemoryUserRepository;
