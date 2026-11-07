class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async registerUser(user) {
    const existingUser = await this.userRepository.findByEmail(user.email);
    if (existingUser) {
      throw new Error("Email is already registered");
    }

    return this.userRepository.create({
      name: user.name.trim(),
      email: user.email.trim().toLowerCase()
    });
  }
}

module.exports = UserService;
